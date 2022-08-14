import React, {useEffect, useState} from "react";
import SortSelect from "./UI/select/SortSelect";
import FilterInput from "./UI/input/FilterInput";
import ApartmentService from "../API/ApartmentService";

const ApartmentFilter = ({filter, setFilter}) => {

    return (
        <div className="FilterApart">
            <FilterInput
                value={filter.query}
                type="number"
                min='1'
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Number of rooms'
            />
            <SortSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    {value: 'asc', name: "Price asc"},
                    {value: 'desc', name: "Price desc"}
                ]}
            />
      </div>
    );
};

export default ApartmentFilter;