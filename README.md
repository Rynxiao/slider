# slider
滑动组件

# React调用方式
```javascript

import React from 'react';
import MySlider from './MySlider';

// right false 禁止右滑
// left false 禁止右滑
// 默认不传为可以左右滑动
// onSlide 参数 x x>0 代表右滑, x<0 代表左滑

const App = React.createClass({
    onSlide(x) {
        if (x > 0) {
            console.log('right');
        } else {
            console.log('left');
        }
    },
    render() {
        reutrn (
            <MySlider onSlide={this.onSlide} right={false}>
                <div>
                    // ... some
                </div>
            </MySlider>
        );
    }
});

export default App;
```
