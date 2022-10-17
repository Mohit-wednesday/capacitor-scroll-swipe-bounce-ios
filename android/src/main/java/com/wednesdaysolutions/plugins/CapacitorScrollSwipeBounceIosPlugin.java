package com.wednesdaysolutions.plugins;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorScrollSwipeBounceIos")
public class CapacitorScrollSwipeBounceIosPlugin extends Plugin {

    private CapacitorScrollSwipeBounceIos implementation = new CapacitorScrollSwipeBounceIos();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
