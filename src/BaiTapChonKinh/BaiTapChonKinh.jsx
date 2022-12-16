import React, { Component } from 'react'

import data from "../data/dataGlasses.json";

export default class BaiTapChonKinh extends Component {
    state = {
        url: data[0].url,
        name: data[0].name,
        desc: data[0].desc,
    };

    
    handleChangeGlass = (element) => {
        this.setState({
            url: element.url,
            name: element.name,
            desc: element.desc,
        });
    }

    renderGlassList = () => {
        return data.map((element) => {
            return (
                <div className='col-2 m-1' key={element.id}>
                    <img onClick={() => this.handleChangeGlass(element)} src={element.url} alt="" style={{border:"1px solid #c8cdd23d", borderRadius: 8, background: "#7bc4cc45", width: 100, height: 100, objectFit: 'contain'}}/>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Try Glasses App Online</span>
                </nav>
                <section className='modelImage rounded mx-auto mt-2 d-block' style={{position: "relative", backgroundImage: "url(/images/model.jpg)", height: 380, width: 300, backgroundSize: "cover"}}>
                    <img src={this.state.url} alt="" style={{position: "absolute", top: "26%", left: "25%", width: 165, height: 50}}/>
                    <div className='glassDetail' style={{background: "#fc9e2c7a", position: "absolute", bottom: 0, height: 110, width: 300}}>
                        <h4 style={{color: "#3647b8de"}}>{this.state.name}</h4>
                        <span style={{color: "white"}}>{this.state.desc}</span>
                    </div>
                </section>
                <section className='glassesBox container mt-3 bg-light rounded'>
                    <div className='row glassesList px-3 py-3 justify-content-center text-center'>
                        {this.renderGlassList()}
                    </div>
                </section>
            </div>
        )
    }
}
