import React, { Component } from 'react';
import CustomCard from './04CustomCardStrcutre';

class ClassCompoPropsExmaple extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-3"> <CustomCard imgurl="iphone-14W.jfif" title="prod 1 title" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, veritatis pariatur quam sed nemo iusto  <strong>osuscipit quis veniam deleniti</strong>  aliquid error neque eum similique, autem ipsa unde cupiditate? Totam, odit.
                    </CustomCard></div>
                    <div className="col-md-3"> <CustomCard title="something" imgurl="iphone-14.jfif" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, veritatis pariatur quam sed nemo iusto  <strong>osuscipit quis veniam deleniti</strong>  aliquid error neque eum similique, autem ipsa unde cupiditate? Totam, odit.
                    </CustomCard></div>
                    <div className="col-md-3"> <CustomCard title="product" imgurl="iphone-14Ws.jfif">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, veritatis pariatur quam sed nemo iusto  <strong>osuscipit quis veniam deleniti</strong>  aliquid error neque eum similique, autem ipsa unde cupiditate? Totam, odit.
                    </CustomCard></div>
                    <div className="col-md-3"> <CustomCard title="title" imgurl="iphone-14W.jfif">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, veritatis pariatur quam sed nemo iusto  <strong>osuscipit quis veniam deleniti</strong>  aliquid error neque eum similique, autem ipsa unde cupiditate? Totam, odit.
                    </CustomCard></div>
                </div>
            </>
        );
    }
}

export default ClassCompoPropsExmaple;