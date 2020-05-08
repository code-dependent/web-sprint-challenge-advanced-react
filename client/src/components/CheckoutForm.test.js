import React from "react";
import { render, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm/>)
    const header = getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText,getByTestId,queryByTestId, getByText} = render(<CheckoutForm/>)
    const firstField = getByLabelText(/first name/i)
    const lastField = getByLabelText(/last name/i)
    const addressField = getByLabelText(/address/i)
    const cityField = getByLabelText(/city/i)
    const stateField = getByLabelText(/state/i)
    const zipField = getByLabelText(/zip/i)
    const checkout = getByTestId('checkoutBtn')

    expect(firstField).toBeInTheDocument()
    expect(lastField).toBeInTheDocument()
    expect(addressField).toBeInTheDocument()
    expect(cityField).toBeInTheDocument()
    expect(stateField).toBeInTheDocument()
    expect(zipField).toBeInTheDocument()
    expect(checkout).toBeInTheDocument()
    expect(queryByTestId('successMessage')).not.toBeInTheDocument()
    fireEvent.change(firstField,{target:{value:'okay'}})
    fireEvent.change(lastField,{target:{value:'mylname'}})
    fireEvent.change(addressField,{target:{value:'555 sandstone ct'}})
    fireEvent.change(cityField,{target:{value:'virginia beach'}})
    fireEvent.change(stateField,{target:{value:'virginia'}})
    fireEvent.change(zipField,{target:{value:'23605'}})
    fireEvent.click(checkout)

    expect(queryByTestId('successMessage')).toBeInTheDocument()
    expect(getByText('okay mylname')).toBeInTheDocument()
    expect(getByText('555 sandstone ct')).toBeInTheDocument()
    expect(getByText('virginia beach, virginia 23605')).toBeInTheDocument()



});
