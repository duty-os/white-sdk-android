package com.herewhite.demo;

import android.view.View;

import com.herewhite.demo.utils.SimpleViewAction;
import com.herewhite.sdk.AbstractRoomCallbacks;
import com.herewhite.sdk.domain.Appliance;
import com.herewhite.sdk.domain.GlobalState;
import com.herewhite.sdk.domain.MemberState;
import com.herewhite.sdk.domain.Promise;
import com.herewhite.sdk.domain.RoomPhase;
import com.herewhite.sdk.domain.RoomState;
import com.herewhite.sdk.domain.SDKError;
import com.herewhite.sdk.domain.SceneState;
import com.herewhite.sdk.domain.ViewMode;
import com.herewhite.sdk.domain.WhiteDisplayerState;

import org.junit.After;
import org.junit.Rule;
import org.junit.Test;

import java.util.concurrent.CountDownLatch;

import androidx.test.espresso.Espresso;
import androidx.test.espresso.IdlingRegistry;
import androidx.test.espresso.IdlingResource;
import androidx.test.espresso.UiController;
import androidx.test.espresso.idling.CountingIdlingResource;
import androidx.test.rule.ActivityTestRule;

import static androidx.test.espresso.Espresso.onIdle;
import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;
import static androidx.test.espresso.matcher.ViewMatchers.isRoot;
import static androidx.test.espresso.matcher.ViewMatchers.withId;
import static com.herewhite.demo.TestUtils.downToUp;
import static com.herewhite.demo.TestUtils.waitFor;
import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * UI/Integration Test For Room Use RoomActivity
 */
public class RoomTest {
    private IdlingResource mIdlingResource;
    private RoomActivity mActivity;

    @Rule
    public ActivityTestRule activityRule = new ActivityTestRule(RoomActivity.class) {
        @Override
        protected void afterActivityLaunched() {
            mActivity = (RoomActivity) activityRule.getActivity();

            mIdlingResource = mActivity.getIdlingResource();
            IdlingRegistry.getInstance().register(mIdlingResource);
        }
    };

    @Test
    public void testSetAndGet_MemberState() {
        onIdle();

        MemberState state = new MemberState();
        state.setStrokeColor(new int[]{99, 99, 99});
        state.setCurrentApplianceName(Appliance.TEXT);
        state.setStrokeWidth(10);
        state.setTextSize(10);

        mActivity.mRoom.setMemberState(state);
        mActivity.mRoom.getMemberState(new Promise<MemberState>() {
            @Override
            public void then(MemberState memberState) {
                assertEquals(state.getCurrentApplianceName(), memberState.getCurrentApplianceName());
                assertArrayEquals(state.getStrokeColor(), memberState.getStrokeColor());
                assertEquals(state.getStrokeWidth(), memberState.getStrokeWidth(), Constants.DOUBLE_DELTA);
                assertEquals(state.getTextSize(), memberState.getTextSize(), Constants.DOUBLE_DELTA);
            }

            @Override
            public void catchEx(SDKError t) {

            }
        });
    }

    class LocalGlobalState extends GlobalState {
        private String globalString = "globalString";
        private int globalInt = 0x1234;
    }

    @Test
    public void testSetAndGet_GlobalState() {
        onView(withId(R.id.white)).check(matches(isDisplayed()));

        LocalGlobalState testState = new LocalGlobalState();
        mActivity.mRoom.setGlobalState(testState);

        WhiteDisplayerState.setCustomGlobalStateClass(LocalGlobalState.class);
        LocalGlobalState globalState = (LocalGlobalState) mActivity.mRoom.getGlobalState();
        assertTrue(globalState.globalInt == testState.globalInt);

        mActivity.mRoom.getGlobalState(new Promise<GlobalState>() {
            @Override
            public void then(GlobalState globalState) {
                LocalGlobalState globalState2 = (LocalGlobalState) mActivity.mRoom.getGlobalState();
                assertTrue(globalState2.globalInt == testState.globalInt);
                assertEquals(testState.globalString, globalState2.globalString);
            }

            @Override
            public void catchEx(SDKError t) {

            }
        });
    }

    @Test
    public void testSetAndGet_Writable() {
        onView(withId(R.id.white)).check(matches(isDisplayed()));

        mActivity.mRoom.setWritable(true, new Promise<Boolean>() {
            @Override
            public void then(Boolean writeable) {
                assertTrue(writeable);
                assertTrue(mActivity.mRoom.getWritable());
            }

            @Override
            public void catchEx(SDKError t) {

            }
        });
    }

    @Test
    public void testDrawLine() {
        onView(withId(R.id.white)).check(matches(isDisplayed()));

        onView(withId(R.id.white)).perform(downToUp(100, 120, 300, 300));
        onView(isRoot()).perform(waitFor(500));

        onView(withId(R.id.white)).perform(downToUp(300, 400, 500, 600));
        onView(isRoot()).perform(waitFor(500));
    }

    class FakeRoomCallbacks extends AbstractRoomCallbacks {
        static final String MODIFY_STATE = "modifyState";
        static final String ROOM_PHASE_CONNECTED = "roomPhaseConnected";
        static final String ROOM_PHASE_DISCONNECTED = "roomPhaseDisconnected";

        public long canUndoSteps;
        public long canRedoSteps;
        private RoomState modifyState;
        private RoomPhase roomPhase;

        private CountingIdlingResource idlingResource = new CountingIdlingResource("RoomCallbacks");
        private volatile String optKey;

        @Override
        public void onCanUndoStepsUpdate(long canUndoSteps) {
            this.canUndoSteps = canUndoSteps;
            super.onCanUndoStepsUpdate(canUndoSteps);
        }

        @Override
        public void onCanRedoStepsUpdate(long canRedoSteps) {
            this.canRedoSteps = canRedoSteps;
            super.onCanRedoStepsUpdate(canRedoSteps);
        }

        @Override
        public void onRoomStateChanged(RoomState modifyState) {
            this.modifyState = modifyState;
            if (modifyState.getBroadcastState() != null) {
                checkAndMark(MODIFY_STATE);
            }
            super.onRoomStateChanged(modifyState);
        }

        @Override
        public void onPhaseChanged(RoomPhase phase) {
            this.roomPhase = phase;
            if (phase == RoomPhase.connected) {
                checkAndMark(ROOM_PHASE_CONNECTED);
            } else if (phase == RoomPhase.disconnected) {
                checkAndMark(ROOM_PHASE_DISCONNECTED);
            }
            super.onPhaseChanged(phase);
        }

        private void checkAndMark(String key) {
            if (key.equals(optKey) && !idlingResource.isIdleNow()) {
                idlingResource.decrement();
            }
        }

        public void registerIdle() {
            IdlingRegistry.getInstance().register(idlingResource);
        }

        public void unregisterIdle() {
            IdlingRegistry.getInstance().unregister(idlingResource);
        }

        public void start(String key) {
            idlingResource.increment();
            optKey = key;
        }
    }

    @Test
    public void undoAndRedo() {
        onView(withId(R.id.white)).check(matches(isDisplayed()));

        FakeRoomCallbacks fakeRoomCallbacks = new FakeRoomCallbacks();
        mActivity.mRoom.disableSerialization(false);
        mActivity.mRoomCallbackHock = fakeRoomCallbacks;

        // action
        onView(withId(R.id.white)).perform(downToUp(100, 120, 300, 300));
        onView(isRoot()).perform(waitFor(500));

        onView(withId(R.id.white)).perform(downToUp(300, 400, 500, 600));
        onView(isRoot()).perform(waitFor(500));

        // undo test
        long lastUndoSteps = fakeRoomCallbacks.canUndoSteps;
        assertTrue(lastUndoSteps > 0);
        mActivity.mRoom.undo();
        onView(isRoot()).perform(waitFor(500)); // delay for sync
        assertEquals(lastUndoSteps - 1, fakeRoomCallbacks.canUndoSteps);

        // redo test
        long lastRedoSteps = fakeRoomCallbacks.canRedoSteps;
        assertTrue(lastRedoSteps > 0);
        mActivity.mRoom.redo();
        onView(isRoot()).perform(waitFor(500)); // delay for sync
        assertEquals(lastRedoSteps - 1, fakeRoomCallbacks.canRedoSteps);
    }

    @Test
    public void setViewMode() {
        FakeRoomCallbacks fakeRoomCallbacks = new FakeRoomCallbacks();
        mActivity.mRoomCallbackHock = fakeRoomCallbacks;
        fakeRoomCallbacks.registerIdle();

        onView(isRoot()).perform(new SimpleViewAction() {
            @Override
            public void perform(UiController uiController, View view) {
                fakeRoomCallbacks.start(FakeRoomCallbacks.MODIFY_STATE);
                mActivity.mRoom.setViewMode(ViewMode.Broadcaster);
            }
        });

        onView(isRoot()).perform(new SimpleViewAction() {
            @Override
            public void perform(UiController uiController, View view) {
                assertEquals(ViewMode.Broadcaster, mActivity.mRoom.getBroadcastState().getMode());
                fakeRoomCallbacks.unregisterIdle();
            }
        });
    }

    @Test
    public void disconnect_roomPhase_disconnected() {
        FakeRoomCallbacks fakeRoomCallbacks = new FakeRoomCallbacks();
        mActivity.mRoomCallbackHock = fakeRoomCallbacks;
        fakeRoomCallbacks.registerIdle();

        onIdle();
        assertEquals(RoomPhase.connected, fakeRoomCallbacks.roomPhase);

        fakeRoomCallbacks.start(FakeRoomCallbacks.ROOM_PHASE_DISCONNECTED);
        mActivity.mRoom.disconnect();

        onView(isRoot()).perform(new SimpleViewAction() {
            @Override
            public void perform(UiController uiController, View view) {
                assertEquals(RoomPhase.disconnected, fakeRoomCallbacks.roomPhase);
                fakeRoomCallbacks.unregisterIdle();
            }
        });
    }

    class SetScenePathResult implements Promise<Boolean> {
        CountDownLatch countDownLatch = new CountDownLatch(1);

        SetScenePathResult() {

        }

        @Override
        public void then(Boolean success) {
            countDownLatch.countDown();
        }

        @Override
        public void catchEx(SDKError t) {
            countDownLatch.countDown();
        }

        public void await() throws InterruptedException {
            countDownLatch.await();
        }
    }

    SceneState currentSceneState = null;

    @Test
    public void setScenePath() {
        onIdle();

        CountingIdlingResource idlingResource = new CountingIdlingResource("getScenePath");
        idlingResource.increment();
        mActivity.mRoom.getSceneState(new Promise<SceneState>() {
            @Override
            public void then(SceneState sceneState) {
                currentSceneState = sceneState;
                idlingResource.decrement();
            }

            @Override
            public void catchEx(SDKError t) {
                idlingResource.decrement();
            }
        });
        IdlingRegistry.getInstance().register(idlingResource);

        onView(isRoot()).perform(new SimpleViewAction() {
            @Override
            public void perform(UiController uiController, View view) {
                IdlingRegistry.getInstance().unregister(idlingResource);
                if (currentSceneState == null) {
                    fail();
                }

                SetScenePathResult result = new SetScenePathResult();
                mActivity.mRoom.setScenePath("/invalid/path", result);
                try {
                    result.await();
                } catch (InterruptedException e) {
                }
            }
        });


    }

    @Test
    public void testSetScenePath() {
    }

    @Test
    public void setSceneIndex() {
    }

    @Test
    public void putScenes() {
    }

    @Test
    public void moveScene() {

    }

    @Test
    public void removeScenes() {

    }

    @Test
    public void cleanScene() {

    }

    @Test
    public void pptNextStep() {
    }

    @Test
    public void pptPreviousStep() {
    }

    @Test
    public void zoomChange() {

    }

    @Test
    public void debugInfo() {

    }

    @Test
    public void disableOperations() {

    }

    @Test
    public void disableEraseImage() {

    }

    @Test
    public void disableCameraTransform() {
    }

    @Test
    public void disableDeviceInputs() {
    }

    @After
    public void unregisterIdlingResource() {
        if (mIdlingResource != null) {
            IdlingRegistry.getInstance().unregister(mIdlingResource);
        }
    }
}