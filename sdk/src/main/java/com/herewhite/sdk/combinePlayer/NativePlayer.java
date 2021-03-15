package com.herewhite.sdk.combinePlayer;

/**
 * NativePlayer 接口
 *
 * @since 2.4.23
 */
public interface NativePlayer {

    /**
     * play 方法，由 PlayerSyncManager 调用，请勿主动调用。
     * 在该方法里，如果 NativePlayerPhase 发生了，需要调动 {@link PlayerSyncManager#updateNativePhase(NativePlayerPhase)} 方法
     */
    void play();

    /**
     * pause 方法，由 PlayerSyncManager 调用，请勿主动调用
     */
    void pause();

    /**
     * 是否能够不经过缓冲，而直接播放
     *
     * @return 是否有足够的缓冲
     */
    boolean hasEnoughBuffer();

    /**
     * 允许 PlayerSyncManager 提前初始化，不等待 nativePlayer 初始化
     *
     * @return
     */
    NativePlayerPhase getPhase();

    enum NativePlayerPhase {
        /**
         * 初始化状态，没有任何信息
         */
        Idle,
        /**
         * 暂停中
         */
        Pause,
        /**
         * 正在连续播放（如果因为没有数据，进入缓冲状态，就是 buffering
         */
        Playing,
        /**
         * 正在缓冲中
         */
        Buffering,
    }
}
