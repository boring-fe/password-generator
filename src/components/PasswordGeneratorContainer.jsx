import React from 'react';
import { PasswordGenerator } from './PasswordGenerator';
import { STRATEGIES_NAME, GeneratorsFactory } from '../core';

const ALL_STRATEGIES = Object.values(STRATEGIES_NAME);

class PasswordGeneratorContainer extends React.Component {
  state = {
    suggestedPassword: '',
    length: 5,
    strategies: new Set(ALL_STRATEGIES),
  };

  componentDidMount() {
    this.generatePassword();
  }

  iniGenerator = () => {
    const { length, strategies } = this.state;
    this.generator = GeneratorsFactory.create(length, strategies);
  };

  generatePassword() {
    this.iniGenerator();
    this.setPassword();
  }

  setPassword = () => {
    const suggestedPassword = this.generator.generate();
    this.setState((state) => ({ ...state, suggestedPassword }));
  };

  setLength = (length) => {
    this.generator.setLength(length);
    this.setState((state) => ({ ...state, length }), this.setPassword);
  };

  removeStrategy = (strategyName) => {
    const { strategies } = this.state;
    if (strategies.size === 1) {
      return;
    }
    const updateStrategies = new Set(strategies);
    updateStrategies.delete(strategyName);
    this.setState(
      (state) => ({ ...state, strategies: updateStrategies }),
      this.generatePassword
    );
  };

  addStrategy = (strategyName) => {
    const strategies = new Set(this.state.strategies);
    strategies.add(strategyName);
    this.setState((state) => ({ ...state, strategies }), this.generatePassword);
  };

  toggleStrategy = (strategyName) => {
    const { strategies } = this.state;
    if (strategies.has(strategyName)) {
      this.removeStrategy(strategyName);
    } else {
      this.addStrategy(strategyName);
    }
  };

  render() {
    const { suggestedPassword, length, strategies } = this.state;
    return (
      <PasswordGenerator
        suggestedPassword={suggestedPassword}
        onLengthChange={this.setLength}
        onStrategyChange={this.toggleStrategy}
        length={length}
        strategyList={ALL_STRATEGIES}
        activeStratefies={[...strategies]}
      />
    );
  }
}

export { PasswordGeneratorContainer as PasswordGenerator };
