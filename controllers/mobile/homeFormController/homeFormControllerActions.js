define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onMenuItemClick defined for slidingmenu **/
    AS_UWI_fc781d52aafd43428e6ed50040bc651d: function AS_UWI_fc781d52aafd43428e6ed50040bc651d(menuindex) {
        var self = this;
        if ((menuindex == 3)) {
            AppState.resetState();
            kony.application.exit();
        }
    },
    /** init defined for homeForm **/
    AS_Form_b906b462d40845468eecdc51eab2766c: function AS_Form_b906b462d40845468eecdc51eab2766c(eventobject) {
        var self = this;
    },
    /** preshow defined for homeForm **/
    AS_Form_c793ec9c2614404ea646ed9257077303: function AS_Form_c793ec9c2614404ea646ed9257077303(eventobject) {
        var self = this;
    },
    /** postshow defined for homeForm **/
    AS_Form_dc994db10e1140c496a8d5199aeb46ae: function AS_Form_dc994db10e1140c496a8d5199aeb46ae(eventobject) {
        var self = this;
        const AppState = require("AppState");
        try {
            let storedEmail = AppState.email();
            alert(storedEmail);
            self.view.slidingmenu.headingText = storedEmail;
        } catch (err) {
            alert("Não pude obter o email");
        }
    }
});