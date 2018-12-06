const LoginModule = ( () => {
  const navigateToHome = () => {
    var ntf = new kony.mvc.Navigation("homeForm");
    ntf.navigate();
  };
  
  return {
    checkCredentials: (email, password) => {
      const self = this;
      const AppState = require("AppState");
      
      if (AppState === null) {
        alert("Não pude obter o estado do app");
        return;
      }
      
      try {
        let storedEmail = AppState.email();
      } catch(err) {
        alert("Não pude obter o email");
      }
      if (email === AppState.email() && password === AppState.password()) {
        navigateToHome();
        return;
      }

      if (email !== null || password !== null) {
        AppState.setEmail(email);
      	AppState.setPassword(password);
        
        const basicConf = {
          message: `Atualizando dados email: ${email}, senha: ${password}`,
          alertType: constants.ALERT_TYPE_INFO,
          alertTitle: "Dados atualizados",
          yesLabel: "OK", alertHandler: navigateToHome
        };
        
        const platformSpecificConf = {};
        kony.ui.Alert(basicConf, platformSpecificConf);
      	
      	navigateToHome();
        return;
      }
    }
  };
})();