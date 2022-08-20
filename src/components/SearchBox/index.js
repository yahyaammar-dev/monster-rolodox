import { Component } from "react";
import './styles.css'

class SearchBox extends Component {
  render() {
    return <input type='search' className={`searchBox ${this.props.className}`} placeholder={this.props.placeholder} name={this.props.name} onChange={this.props.onChangeHandler} />
  }
}

export default SearchBox