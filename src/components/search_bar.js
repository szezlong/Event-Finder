import React from "react";
import { Input } from "antd";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchBar = ({width}) => (
  <Search
    placeholder="input an address"
    allowClear
    enterButton="Search"
    size="large"
    onSearch={onSearch}
    style={{ width: width }}
  />
);
export default SearchBar;