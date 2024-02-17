import React from "react";
import styled from 'styled-components';
import colors from "@constants/Colors";
const ErrorWrap = styled.div`
    display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:100vh;
    & h2{margin:0 0 20px;font-size:22px;color:${colors.black};}
    & button{
        display:flex;background:#000;color:#fff;font-size:16px;border-radius:6px;padding:10px 20px;border:none;
        &:hover{background:${colors.black};}
    }
`;

class ErrorBoundary extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch(error,errorInfo){
        console.log({error,errorInfo})
    }
    handlerButton = () => {
        this.setState({hasError: false});
    }
    render(){
        const {hasError} = this.state;
        if(hasError){
            return (
                <ErrorWrap>
                    <h2>Oops, something went wrong!</h2>
                    <button type="button " style={{background:"black"}} onClick={this.handlerButton}>Try again?</button>
                </ErrorWrap>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary