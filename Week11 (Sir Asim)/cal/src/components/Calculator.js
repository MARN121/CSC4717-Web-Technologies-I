import React, { Component } from 'react'

class Calculator extends Component {

    state = {
		display: 0,
		nums: [0, 0],
		index: 0,
		opr: '',
    };
    
    handleClick = (e) => {
		const { nums, index } = this.state;

		switch (e.target.innerText) {
			case '+':
			case '-':
			case '/':
			case '*':
				this.setState({ opr: e.target.innerText, index: 1 });
				break;
			case '=':
                let result =
                this.state.opr === '+'
                ? nums[0] + nums[1]
                : this.state.opr === '-'
                ? nums[0] - nums[1]
                : this.state.opr === '*'
                ? nums[0] * nums[1]
                : nums[0] / nums[1];
                
                this.setState({
                    nums: [result, 0],
                    display: result,
                    index: 1,
                });
				break;
                
            case 'C':
                    nums[index] = 0;
                    this.setState({display: ' ', nums})
                break;

            default:				
                let n = Number(e.target.innerText);				
                nums[index] = nums[index] * 10 + n;				
                this.setState({ display: nums[index], nums });				
                break;           
            }     
        };

        
    render() {            
        return (
        <div>
            <div style={{ border: '1px solid #808080', width: '100px', textAlign: 'right', margin: 'auto' }}>
                {this.state.display}
                </div>
                <div>
                    <button onClick={this.handleClick}>1</button>
                    <button onClick={this.handleClick}>2</button>
                    <button onClick={this.handleClick}>3</button>
                    <button onClick={this.handleClick}>+</button>
                </div>
                <div>
                    <button onClick={this.handleClick}>4</button>
                    <button onClick={this.handleClick}>5</button>
                    <button onClick={this.handleClick}>6</button>
                    <button onClick={this.handleClick}>-</button>
                </div>
                <div>
                    <button onClick={this.handleClick}>7</button>
                    <button onClick={this.handleClick}>8</button>
                    <button onClick={this.handleClick}>9</button>
                    <button onClick={this.handleClick}>*</button>
                </div>
                <div>
                    <button onClick={this.handleClick}>C</button>
                    <button onClick={this.handleClick}>0</button>
                    <button onClick={this.handleClick}>=</button>
                    <button onClick={this.handleClick}>/</button>
                </div>
                <pre style={{ textAlign: 'left', border: '2px solid #808080' }}>{JSON.stringify(this.state, null,2)}</pre>
                </div>
                );
            }
        }

export default Calculator
