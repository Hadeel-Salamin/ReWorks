import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';

class GetDetails extends Component {
  state={
    isOpen: false,
    selectedCat: null,
    selected_itemType: '',
    selected_colors: '',
    selected_brands: '',
    selected_condition: '',
    selected_labelSize: '',
    selected_age: '',
  }

  continue = () => {
    axios.get('/checkcookie').then(({ data: { cookie, logged } }) => {
      const { history } = this.props;
      if (cookie) {
        history.push({ pathname: '/item-list', logged });
      } else {
        history.push('/login-form');
      }
    });
  };

  toggleOpen = (e) => {
    const clicked = e.target.value.split('.');
    if (clicked[1] === 'more') {
      this.setState({ isOpen: true, selectedCat: clicked[0] });
    } else {
      const selected = `selected_${clicked[0]}`;
      this.setState({ [selected]: e.target.value });
    }
  };

  toggleClose = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  changeSelected = (e) => {
    e.preventDefault();
    const selected = `selected_${this.state.selectedCat}`;
    this.setState({ [selected]: e.target.value.split('.')[1], isOpen: false });
  };

  componentDidMount() {
    const { apparel, colors } = this.props.location.details;
    if (apparel && colors) {
      this.setState({
        selected_itemType: apparel.data[0].tag_name,
        selected_colors: colors.data[0].tag_name,
      });
    }
  }

  render() {
    const { image_url, apparel, colors } = this.props.location.details;
    return (
      <React.Fragment>
        <Title {...this.props} />
        <Header title="Get your details" />
        <Form
          image={image_url}
          apparel={apparel}
          colors={colors}
          {...this.state}
          toggleOpen={this.toggleOpen}
          toggleClose={this.toggleClose}
          changeSelected={this.changeSelected}
        />
        <Button />
        <GButton title="CONTINUE" onClick={this.continue} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default GetDetails;
