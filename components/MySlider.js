/**
 * Created by Ryn on 2016/8/8.
 */

import React from 'react';

const MySlider = React.createClass({

    /**
     * 组件初始化状态
     */
    getInitialState() {
        return {
            start_x : 0,
            start_y : 0,
            delta_x : 0,
            delta_y : 0,
            s_time : 0
        }
    },

    /**
     * 开始滑动
     * @param event
     */
    touchStart(event) {
        let touch = event.touches[0];
        this.setState({
            start_x : touch.clientX,
            start_y : touch.clientY,
            s_time : event.timeStamp
        });
    },

    /**
     * 滑动
     * @param event
     */
    touchMove(event) {
        let touch = event.touches[0],
            { start_x, start_y } = this.state,
            sliderElement = this.refs.slider,
            d_x, d_y;
        d_x = touch.clientX - start_x;
        d_y = touch.clientY - start_y;

        sliderElement.style.transform = 'translate3d('+ d_x +'px, 0, 0)';
        sliderElement.style.webkitTransform = 'translate3d('+ d_x +'px, 0, 0)';
        sliderElement.style.msTransform = 'translate3d('+ d_x +'px, 0, 0)';
        sliderElement.style.oTransform = 'translate3d('+ d_x +'px, 0, 0)';

        this.setState({
            delta_x : d_x,
            delta_y : d_y
        });
    },

    onSlide(delta_x) {
        this.props.onSlide(delta_x);
    },

    /**
     * 结束滑动
     * @param event
     */
    touchEnd(event) {
        let sliderElement = this.refs.slider,
            { delta_x, delta_y, s_time} = this.state,
            delta_time, deltaX, deltaY, containerWidth;

        delta_time = event.timeStamp - s_time;
        deltaX = Math.abs(delta_x);
        deltaY = Math.abs(delta_y);
        containerWidth = sliderElement.parentNode.clientWidth;

        /**
         * 如果间隔时间小于150ms，则认为是tap事件，否则认为是滑动事件
         * 如果是滑动事件，判断delta_x与delta_y绝对值比值，如果比值大于1，则认为是水平移动，否则竖直移动
         * 如果是水平移动，判断delta_x大于0还是小于0，大于0，则说明是右移，否则为左移
         * 如果竖直移动，则直接返回
         */
        if (delta_time < 150) {
            // tap event
        } else {
            if (deltaX / deltaY > 1) {  // 水平移动
                if (deltaX < containerWidth * 0.3) {
                    sliderElement.style.transform = 'translate3d(0, 0, 0)';
                    sliderElement.style.webkitTransform = 'translate3d(0, 0, 0)';
                    sliderElement.style.msTransform = 'translate3d(0, 0, 0)';
                    sliderElement.style.oTransform = 'translate3d(0, 0, 0)';
                } else {
                    if (delta_x > 0) {
                        sliderElement.style.transform = 'translate3d('+ containerWidth +'px, 0, 0)';
                        sliderElement.style.webkitTransform = 'translate3d('+ containerWidth +'px, 0, 0)';
                        sliderElement.style.msTransform = 'translate3d('+ containerWidth +'px, 0, 0)';
                        sliderElement.style.oTransform = 'translate3d('+ containerWidth +'px, 0, 0)';
                    } else {
                        sliderElement.style.transform = 'translate3d(-'+ containerWidth +'px, 0, 0)';
                        sliderElement.style.webkitTransform = 'translate3d(-'+ containerWidth +'px, 0, 0)';
                        sliderElement.style.msTransform = 'translate3d(-'+ containerWidth +'px, 0, 0)';
                        sliderElement.style.oTransform = 'translate3d(-'+ containerWidth +'px, 0, 0)';
                    }
                    this.onSlide(delta_x);
                }
            } else {    // 竖直移动
                sliderElement.style.transform = 'translate3d(0, 0, 0)';
                sliderElement.style.webkitTransform = 'translate3d(0, 0, 0)';
                sliderElement.style.msTransform = 'translate3d(0, 0, 0)';
                sliderElement.style.oTransform = 'translate3d(0, 0, 0)';
                return;
            }
        }
    },

    render() {
        return (
            <div className="slider" ref="slider"
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}>
                {this.props.children}
            </div>
        );
    }
});

export default MySlider;