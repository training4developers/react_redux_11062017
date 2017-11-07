

export const registerActions = actionKeys => {

  if (!window.actions) {
    window.actions = {};
  }

  actionKeys.forEach(actionKey => {

    if (actionKey in window.actions) {
      throw Error('duplicate action key');
    }

    window.actions[actionKey] = actionKey;
  });


  // window.actions = { ...window.actions, ...actionKeys.reduce(
  //   (actions, actionKey) => (actions[actionKey] = actionKey, actions),
  //   {}
  // ) };

};