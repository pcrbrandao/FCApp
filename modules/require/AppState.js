define(function () {
    return {
      currentState: () => {
        try {
          return kony.store.getItem("appState");
        } catch(err) {
          return null;
        }
      },
      resetState: () => { 
        try {
          kony.store.clear();
          return true;
        } catch(err) {
          return false;
        }
      },
      setEmail: (email) => { 
        try {
          kony.store.setItem("appState", { email });
          return true;
        } catch(err) {
          return false;
        }
      },
      setPassword: (password) => {
        try {
          kony.store.setItem("appState", { password });
          return true;
        } catch(err) {
          return false;
        }
      },
      email: () => { 
        try {
          const state = kony.store.getItem("appState");
          kony.print(`O email solicitado: ${state.email}`);
          return state.email === null ? "Erro tentando obter o email" : state.email;
        } catch(err) {
          return "Não consegui obter o email";
        }
      },
      password: () => {
        try {
          const state = kony.store.getItem("appState");
          return state.password;
        } catch(err) {
          return null;
        }
      }
    };
});