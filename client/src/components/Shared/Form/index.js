import React, { Component } from 'react';
import { ModalProvider } from 'styled-react-modal';
import Select from 'react-select';
import chroma from 'chroma-js';
import Popup from '../Popup';

import {
  StyledForm,
  StyledImg,
  StyledInformation,
  StyledNotic,
  StyledDiv,
  StyledLabel,
  StyledSelect,
  StyledOption,
  StyledItem,
  StyledLabels,
  StyledInput,
  StyledTextarea,
  StyledImgCon,
  StyledSelectCurrency,
  StyledPriceContainer,
} from './form.style';

class Form extends Component {
  state = {
    categories: [
      'Item Type*',
      'Colour*',
      'Pattern',
      'Brand',
      'Condition',
      'Label size',
      'Size Category',
      'Age',
      'Purchase price',
    ],
  };

  colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, {
      data, isDisabled, isFocused, isSelected,
    }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  render() {
    const {
      image,
      toggleOpen,
      isOpen,
      selectedCat,
      toggleClose,
      changeSelected,
      selected_itemType,
      selected_colors,
      selected_brands,
      selected_condition,
      selected_labelSize,
      selected_age,
      selected_price,
      selected_details,
      selected_patterns,
      selected_currency,

      itemType,
      colors,
      brands,
      condition,
      labelSize,
      age,
      patterns,
      showDefaultOption,
      selected_sizeCategory,
      sizeCategory,
    } = this.props;
    return (
      <StyledForm>
        <StyledImgCon>
          <StyledImg src={image} />
        </StyledImgCon>

        <StyledInformation>ITEM INFORMATION</StyledInformation>
        <StyledNotic>Please verify the items marked* </StyledNotic>

        <StyledDiv>
          <StyledLabels>
            {this.state.categories.map(category => (
              <StyledLabel key={category}>{category}</StyledLabel>
            ))}
          </StyledLabels>

          <StyledItem>
            <StyledSelect onChange={toggleOpen} name="itemType" value={selected_itemType.name}>
              {itemType.map(item => (itemType.indexOf(item) >= 5 ? (
                <StyledOption
                  key={item.id}
                  value={`{"id": "${item.id}", "name": "${item.name}"}`}
                  hidden
                >
                  {item.itemType}
                </StyledOption>
              ) : (
                <StyledOption
                  key={item.id}
                  value={`{"id": "${item.id}", "name": "${item.name}"}`}
                >
                  {item.itemType}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <Select
              defaultValue={[{ value: 'black', label: 'black', color: 'black' }]}
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable
              name="color"
              isMulti
              options={[
                { value: 'black', label: 'black', color: 'black' },
                { value: 'red', label: 'red', color: 'red' },
                { value: 'blue', label: 'blue', color: 'blue' },
                {
                  value: 'MediumSeaGreen',
                  label: 'MediumSeaGreen',
                  color: 'MediumSeaGreen',
                },
                {
                  value: 'MediumVioletRed',
                  label: 'MediumVioletRed',
                  color: 'MediumVioletRed',
                },
                {
                  value: 'YellowGreen',
                  label: 'YellowGreen',
                  color: 'YellowGreen',
                },
              ]}
              styles={this.colourStyles}
              onChange={handleChange}
            />
            <StyledSelect onChange={toggleOpen} name="patterns" value={selected_patterns}>
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {patterns.map(pattern => (patterns.indexOf(pattern) >= 5 ? (
                <StyledOption key={pattern} value={pattern} hidden>
                  {pattern}
                </StyledOption>
              ) : (
                <StyledOption key={pattern} value={pattern}>
                  {pattern}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="brands" value={selected_brands.name}>
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {brands.map(brand => (brands.indexOf(brand) >= 5 ? (
                <StyledOption
                  key={brand.name}
                  value={`{"id": "${brand.id}", "name": "${brand.name}"}`}
                  hidden
                >
                  {brand.name}
                </StyledOption>
              ) : (
                <StyledOption
                  key={brand.name}
                  value={`{"id": "${brand.id}", "name": "${brand.name}"}`}
                >
                  {brand.name}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="condition" value={selected_condition}>
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {condition.map(cond => (condition.indexOf(cond) >= 5 ? (
                <StyledOption key={cond} value={cond} hidden>
                  {cond}
                </StyledOption>
              ) : (
                <StyledOption key={cond} value={cond}>
                  {cond}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="labelSize" value={selected_labelSize}>
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {labelSize.map(size => (labelSize.indexOf(size) >= 5 ? (
                <StyledOption key={size} value={size} hidden>
                  {size}
                </StyledOption>
              ) : (
                <StyledOption key={size} value={size}>
                  {size}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="sizeCategory" value={selected_sizeCategory}>
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {sizeCategory.map(size => (sizeCategory.indexOf(size) >= 5 ? (
                <StyledOption key={size} value={size} hidden>
                  {size}
                </StyledOption>
              ) : (
                <StyledOption key={size} value={size}>
                  {size}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledSelect onChange={toggleOpen} name="age" value={selected_age}>
              {showDefaultOption && (
                <option default hidden>
                  Select...
                </option>
              )}
              {age.map(time => (age.indexOf(time) >= 5 ? (
                <StyledOption key={time} value={time} hidden>
                  {time}
                </StyledOption>
              ) : (
                <StyledOption key={time} value={time}>
                  {time}
                </StyledOption>
              )))}
              <StyledOption value="more">More...</StyledOption>
            </StyledSelect>

            <StyledPriceContainer>
              <StyledInput
                onChange={toggleOpen}
                type="text"
                name="price"
                value={selected_price}
                placeholder="price"
              />

              <StyledSelectCurrency onChange={toggleOpen} name="currency" value={selected_currency}>
                {showDefaultOption && (
                  <option default hidden>
                    $
                  </option>
                )}
                <StyledOption value="£">£</StyledOption>
                <StyledOption value="$">$</StyledOption>
                <StyledOption value="€">€</StyledOption>
              </StyledSelectCurrency>
            </StyledPriceContainer>
          </StyledItem>
        </StyledDiv>

        <StyledTextarea
          onChange={toggleOpen}
          name="details"
          value={selected_details}
          placeholder="More .e.g. What do you love about it?"
        />
        <ModalProvider>
          <Popup
            open={isOpen}
            toggleClose={toggleClose}
            changeSelected={changeSelected}
            name={[selectedCat]}
            data={this.props[selectedCat]}
          />
        </ModalProvider>
      </StyledForm>
    );
  }
}

export default Form;
