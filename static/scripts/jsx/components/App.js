React = require('react')
SampleTree = require('./SampleTree');

var App = React.createClass({

    render: function(){
        return(
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <img src="images/eighty20.png"/>
                            </div>
                        </div>
                    </div>
                </nav>
                <section id="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Field Selection</h3>
                                    </div>
                                    <div className="panel-body">
                                        <SampleTree/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Pivot Table</h3>
                                    </div>
                                    <table className="table table-bordered">

                                        <tbody>
                                            <tr>
                                                <td className="col-md-3">Row Field</td>
                                                <td className="col-md-9"></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3">Column Field</td>
                                                <td className="col-md-9"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="panel-body">
                                        Some Fields
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = App;
