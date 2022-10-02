import { Form } from "react-bootstrap";





const FilterComponent = ({ filterText, onFilter, onClear, sclass }) => (
    <>
        <Form.Control
            id="search"
            className={sclass}
            type="text"
            placeholder="Filter "
        aria-label="Search Input"
            defaultValue={filterText}
            onChange={onFilter}
        />
    </>
);

export default FilterComponent;