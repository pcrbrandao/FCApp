define({ 
  checkLocalEmail: () => {
    var self = this;
    const AppState = require("AppState");
    if (AppState === null) {
      alert("Não pude obter o módulo");
      return;
    }
    
    if ((AppState.email() === null)) {
        var ntf = new kony.mvc.Navigation("loginForm");
        ntf.navigate();
    } else {
        this.view.slidingmenu.headingText = AppState.email();
    }
  }
 });