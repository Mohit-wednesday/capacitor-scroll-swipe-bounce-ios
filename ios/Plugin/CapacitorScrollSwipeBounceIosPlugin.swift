import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorScrollSwipeBounceIosPlugin)
public class CapacitorScrollSwipeBounceIosPlugin: CAPPlugin {
    @objc override public func load() {
        self.bridge?.webView?.scrollView.bounces = true
        self.bridge?.webView?.allowsBackForwardNavigationGestures = true
        }
}
