package com.herewhite.sdk;


import com.herewhite.sdk.domain.RoomPhase;
import com.herewhite.sdk.domain.RoomState;

/**
 * Created by buhe on 2018/8/12.
 */
@Deprecated
public abstract class AbstractRoomCallbacks implements RoomCallbacks {

    @Override
    public void onPhaseChanged(RoomPhase phase) {

    }

    @Override
    public void onDisconnectWithError(Exception e) {

    }

    @Override
    public void onKickedWithReason(String reason) {

    }

    @Override
    public void onRoomStateChanged(RoomState modifyState) {

    }

    @Override
    public void onCanUndoStepsUpdate(long canUndoSteps) {

    }

    @Override
    public void onCanRedoStepsUpdate(long canRedoSteps) {

    }

    @Override
    public void onCatchErrorWhenAppendFrame(long userId, Exception error) {

    }
}