import React from 'react'

class Filter extends React.Component {

    render() {
        return(
            <div> 
                <label htmlFor="print-type">Print Type: </label>

                <select id="print-type" onChange = {(e) => this.props.setPrintFilter(e)}>
                    <option value="all"> All </option>
                    <option value="ebooks"> eBooks </option>
                    <option value="free-ebooks "> Free eBooks</option>
                    <option value="full "> Full </option>
                    <option value="paid-ebooks "> Paid eBooks </option>
                    <option value="partial"> Partial </option>
                </select>

                <label htmlFor="book-type">Book Type: </label>

                <select id="book-type"  onChange = {(e) => this.props.setTypeFilter(e)}>
                    <option value="all"> All </option>
                    <option value="books"> Books </option>
                    <option value="magazines"> Magazines </option>
                </select>
            </div>


        )
    }
}


export default Filter