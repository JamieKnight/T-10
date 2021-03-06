function Controller() {
    function incrementAppLaunchCount() {
        var spCount = Ti.App.Properties.getInt("appLaunchCount");
        Ti.App.Properties.setInt("appLaunchCount", spCount += 1);
        log("DEBUG", "appLaunchCount:" + Ti.App.Properties.getInt("appLaunchCount"));
    }
    function checkSplashLaunch() {
        log("DEBUG", "Checking App Launch Count");
        incrementAppLaunchCount();
        Helper.isSimulator || push.activatePush();
    }
    function launchSpaceApp() {
        log("INFO", "Launching Space App");
        Ti.App.Properties.setString("appmode", "space");
        checkSplashLaunch();
        nextPasses = Alloy.createController("next_passes");
        nextPasses.open();
    }
    function launchEarthApp() {
        log("INFO", "Launching Earth App");
        Ti.App.Properties.setString("appmode", "earth");
        checkSplashLaunch();
        firstWin = Alloy.createController("earth");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    if (Alloy.isTablet) {
        $.__views.index = Ti.UI.createWindow({
            backgroundImage: Alloy.CFG.splashBackground,
            id: "index"
        });
        $.__views.index && $.addTopLevelView($.__views.index);
        $.__views.space = Ti.UI.createView({
            height: "28%",
            width: "80%",
            background: "transparent",
            top: "10%",
            id: "space"
        });
        $.__views.index.add($.__views.space);
        launchSpaceApp ? $.__views.space.addEventListener("click", launchSpaceApp) : __defers["$.__views.space!click!launchSpaceApp"] = true;
        $.__views.earth = Ti.UI.createView({
            height: "28%",
            width: "80%",
            background: "transparent",
            bottom: "10%",
            id: "earth"
        });
        $.__views.index.add($.__views.earth);
        launchEarthApp ? $.__views.earth.addEventListener("click", launchEarthApp) : __defers["$.__views.earth!click!launchEarthApp"] = true;
    }
    if (true && !Alloy.isTablet) {
        $.__views.__alloyId2 = Ti.UI.createWindow({
            id: "__alloyId2"
        });
        $.__views.__alloyId2 && $.addTopLevelView($.__views.__alloyId2);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Helper = require("Helper");
    var log = Helper.log;
    var push = require("push_notification");
    Ti.App.Properties.setBool("allowPush", true);
    if (!Ti.App.Properties.hasProperty("Settings_API_DOMAIN")) {
        Ti.App.Properties.setString("Settings_API_DOMAIN", "localhost");
        Ti.App.Properties.setString("Settings_API_PORT", "8000");
    }
    Ti.API.warn("API server being used: " + Ti.App.Properties.getString("Settings_API_DOMAIN") + ":" + Ti.App.Properties.getString("Settings_API_PORT"));
    setTimeout(function() {
        $.index.open();
    }, 1500);
    __defers["$.__views.space!click!launchSpaceApp"] && $.__views.space.addEventListener("click", launchSpaceApp);
    __defers["$.__views.earth!click!launchEarthApp"] && $.__views.earth.addEventListener("click", launchEarthApp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;