package com.herewhite.sdk;

import android.content.Context;

import com.google.gson.Gson;
import com.herewhite.sdk.domain.AkkoEvent;
import com.herewhite.sdk.domain.EventEntry;
import com.herewhite.sdk.domain.EventListener;
import com.herewhite.sdk.domain.PlayerObserverMode;
import com.herewhite.sdk.domain.PlayerPhase;
import com.herewhite.sdk.domain.PlayerState;
import com.herewhite.sdk.domain.PlayerTimeInfo;
import com.herewhite.sdk.domain.Promise;
import com.herewhite.sdk.domain.SDKError;

import java.util.concurrent.ConcurrentHashMap;

import wendu.dsbridge.OnReturnValue;

public class Player {
    private final static Gson gson = new Gson();

    private final String room;
    private final WhiteBroadView bridge;
    private final Context context;
    private final WhiteSdk whiteSdk;
    private ConcurrentHashMap<String, EventListener> eventListenerConcurrentHashMap = new ConcurrentHashMap<>();

    public Player(String room, WhiteBroadView bridge, Context context, WhiteSdk whiteSdk) {

        this.room = room;
        this.bridge = bridge;
        this.context = context;
        this.whiteSdk = whiteSdk;
    }

    public void play() {
        bridge.callHandler("player.play", new Object[]{});
    }

    public void pause() {
        bridge.callHandler("player.pause", new Object[]{});
    }

    //stop 后，player 资源会被释放。需要重新创建WhitePlayer实例，才可以重新播放
    public void stop() {
        bridge.callHandler("player.stop", new Object[]{});
        this.whiteSdk.releasePlayer(room);
    }

    //跳转至特定时间
    public void seekToScheduleTime(long beginTime) {
        bridge.callHandler("player.seekToScheduleTime", new Object[]{beginTime});
    }

    //设置查看模式
    public void setObserverMode(PlayerObserverMode mode) {
        bridge.callHandler("player.setObserverMode", new Object[]{mode.name()});
    }

    /**
     * 获取房间状态
     * 目前：初始状态为 WhitePlayerPhaseWaitingFirstFrame
     * 当 WhitePlayerPhaseWaitingFirstFrame 时，调用 getPlayerStateWithResult 返回值可能为空。
     */
    public void getPhase(final Promise<PlayerPhase> promise) {
        bridge.callHandler("player.getBroadcastState", new Object[]{}, new OnReturnValue<Object>() {
            @Override
            public void onValue(Object o) {
                try {
                    promise.then(PlayerPhase.valueOf(String.valueOf(o)));
                } catch (Throwable e) {
                    Logger.error("An exception occurred while resolve getPhase method promise", e);
                    promise.catchEx(new SDKError(e.getMessage()));
                }
            }
        });
    }

    public void fireMagixEvent(EventEntry eventEntry) {
        EventListener eventListener = eventListenerConcurrentHashMap.get(eventEntry.getEventName());
        if (eventListener != null) {
            try {
                eventListener.onEvent(eventEntry);
            } catch (Throwable e) {
                Logger.error("An exception occurred while sending the event", e);
            }
        }
    }

    public void removeMagixEventListener(String eventName) {
        this.eventListenerConcurrentHashMap.remove(eventName);
        bridge.callHandler("player.removeMagixEventListener", new Object[]{eventName});
    }

    public void addMagixEventListener(String eventName, EventListener eventListener) {
        this.eventListenerConcurrentHashMap.put(eventName, eventListener);
        bridge.callHandler("player.addEventListener", new Object[]{eventName});
    }

    /**
     * 当 phase 状态为 WhitePlayerPhaseWaitingFirstFrame
     * 回调得到的数据是空的
     */
    public void getPlayerState(final Promise<PlayerState> promise) {
        bridge.callHandler("player.state.playerState", new Object[]{}, new OnReturnValue<Object>() {
            @Override
            public void onValue(Object o) {
                try {
                    PlayerState playerState = gson.fromJson(String.valueOf(o), PlayerState.class);
                    promise.then(playerState);
                } catch (Throwable e) {
                    Logger.error("An exception occurred while resolve getPlayerState method promise", e);
                    promise.catchEx(new SDKError(e.getMessage()));
                }
            }
        });
    }

    /** 获取播放器信息（当前时长，总市场，开始 UTC 时间戳） */
    public void getPlayerTimeInfo(final Promise<PlayerTimeInfo> promise) {
        bridge.callHandler("player.state.timeInfo", new Object[]{}, new OnReturnValue<Object>() {
            @Override
            public void onValue(Object o) {
                try {
                    PlayerTimeInfo playerState = gson.fromJson(String.valueOf(o), PlayerTimeInfo.class);
                    promise.then(playerState);
                } catch (Throwable e) {
                    Logger.error("An exception occurred while resolve getPlayerTimeInfo method promise", e);
                    promise.catchEx(new SDKError(e.getMessage()));
                }
            }
        });
    }


}
