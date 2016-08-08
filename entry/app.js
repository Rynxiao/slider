/**
 * Created by Ryn on 2016/8/7.
 * 入口文件
 */

import '../style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import MySlider from '../components/MySlider';

const App = React.createClass({

    onSlide(x) {
        if (x > 0) {
            console.log('right');
        } else {
            console.log('left');
        }
    },

    render() {
        return (
            <div>
                <h2>header</h2>
                <div className="my-slider">
                    <MySlider onSlide={this.onSlide}>
                        <div className="content">
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            content <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </MySlider>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('slider')
);

