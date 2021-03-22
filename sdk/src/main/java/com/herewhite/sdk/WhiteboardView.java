package com.herewhite.sdk;

import android.content.Context;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.os.Build;
import android.util.AttributeSet;
import android.webkit.WebChromeClient;

import com.herewhite.sdk.domain.Appliance;
import com.herewhite.sdk.domain.MemberState;

import wendu.dsbridge.DWebView;
import wendu.dsbridge.OnReturnValue;

/**
 * white on 2018/8/10.
 */

public class WhiteboardView extends DWebView implements JsBridgeInterface {

    /**
     * 初始化白板界面
     *
     * @param context
     */
    public WhiteboardView(Context context) {
        super(getFixedContext(context));
        init();
    }

    /**
     * 初始化白板界面
     *
     * @param context
     * @param attrs
     */
    public WhiteboardView(Context context, AttributeSet attrs) {
        super(getFixedContext(context), attrs);
        init();
    }

    public static Context getFixedContext(Context context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            return context.createConfigurationContext(new Configuration());
        } else {
            return context;
        }
    }

    private void init() {
        getSettings().setMediaPlaybackRequiresUserGesture(false);
        loadUrl("file:///android_asset/whiteboard/index.html");
        setWebChromeClient(new FixWebChromeClient());
    }

    public <T> void callHandler(String method, Object[] args, OnReturnValue<T> handler) {
        super.callHandler(method, Utils.toBridgeMaps(args), handler);
    }

    public void callHandler(String method, Object[] args) {
        this.callHandler(method, args, null);
    }

    public <T> void callHandler(String method, OnReturnValue<T> handler) {
        this.callHandler(method, null, handler);
    }

    class FixWebChromeClient extends WebChromeClient {
        @Override
        public Bitmap getDefaultVideoPoster() {
            try {
                int width = 100;
                int height = 50;
                // fix https://bugs.chromium.org/p/chromium/issues/detail?id=521753#c8
                return Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
            } catch (Exception e) {
                return super.getDefaultVideoPoster();
            }
        }
    }
}
