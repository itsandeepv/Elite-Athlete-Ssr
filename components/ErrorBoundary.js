import React from "react";


class ErrorBoundary extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            errormessage:""
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch(error,errorInfo){
    }
    handlerButton = () => {
        this.setState({hasError: false});
    }
    render(){
        const {hasError } = this.state;
        if(hasError){
            return (
                <div className="d-flex w-100 h-100 align-items-center jusitfy-content-center flex-column position-absolute">
                    <h2 className="py-2">Oops, something went wrong!</h2>
                    {/* <p>{errormessage}</p> */}
                    <button type="btn btn-primary " style={{background:"blue" ,color:"#fff"}} onClick={this.handlerButton}>Try again?</button>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary