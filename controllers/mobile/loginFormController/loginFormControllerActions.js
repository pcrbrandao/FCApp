define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for AcessarButton **/
    AS_Button_f916101f8c5d424baed0bde45471ebeb: function AS_Button_f916101f8c5d424baed0bde45471ebeb(eventobject) {
        var self = this;
        this.checkCredentials(this.view.emailTextField.text, this.view.passwordTextField.text);
    },
    /** preshow defined for loginForm **/
    AS_Form_bab22d4a300944519432a51d429b4290: function AS_Form_bab22d4a300944519432a51d429b4290(eventobject) {
        var self = this;
        this.checkCredentials(this.view.emailTextField.text, this.view.passwordTextField.text);
    }
});