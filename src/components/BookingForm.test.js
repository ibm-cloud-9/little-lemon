import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';
import userEvent from "@testing-library/user-event";


describe("Booking Page", () => {


    test("Should render component correctly", () => {
      render(<BookingPage />);

      const titleElement = screen.getByRole("heading", {level: 1});
      expect(titleElement).toBeInTheDocument();

      const subTitleElement = screen.getByRole("heading", {level: 2});
      expect(subTitleElement).toBeInTheDocument();

      const dateInput = screen.getByLabelText(/Choose date/);
      expect(dateInput).toBeInTheDocument();
  
      const timeInput = screen.getByLabelText(/Choose time/);
      expect(timeInput).toBeInTheDocument();

      const guestsInput = screen.getByLabelText(/Number of guests/);
      expect(guestsInput).toBeInTheDocument();

      const occasionInput = screen.getByLabelText(/Occasion/);
      expect(occasionInput).toBeInTheDocument();

      const submitButton = screen.getByRole("button");
      expect(submitButton).toBeInTheDocument();      
    });

    test("Should show required message when fields are not entered", () => {
      render(<BookingPage />);

      const dateInput = screen.getByLabelText(/Choose date/);
      expect(dateInput).toHaveValue("")
  
      const timeInput = screen.getByLabelText(/Choose time/);
      expect(timeInput).toHaveValue("")

      const guestsInput = screen.getByLabelText(/Number of guests/);
      expect(guestsInput).toHaveValue(0)

      const submitButton = screen.getByRole("button");
      expect(submitButton).toBeInTheDocument(); 

      userEvent.click(submitButton);

      expect(dateInput).toHaveProperty("required")
      expect(timeInput).toHaveProperty("required")
      expect(guestsInput).toHaveProperty("required")                 

    });

  test("User is able to submit the form if the occasion is empty", () => {
    const date = "2024-02-08";
    const time = "19:00";
    const guests = 1;
    const occasion = "";

    const availableTimes = ["17:00","17:30","18:00","18:30","19:00","19:30"];

    const handleSubmit = jest.fn();

    render(<BookingPage onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const availableTimesInput = screen.getByLabelText(/Choose time/)
    fireEvent.change(availableTimesInput, { target: { value: availableTimes } });

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: guests } });

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });

    const confirmation = screen.getByPlaceholderText("confirmation");

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(confirmation).toHaveValue("success");

   });

   test("User is able to submit the form if values are filled ", () => {
    const date = "2024-02-08";
    const time = "19:00";
    const guests = 1;
    const occasion = "Birthday";

    const availableTimes = ["17:00","17:30","18:00","18:30","19:00","19:30"];

    const handleSubmit = jest.fn();

    render(<BookingPage onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const availableTimesInput = screen.getByLabelText(/Choose time/)
    fireEvent.change(availableTimesInput, { target: { value: availableTimes } });

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: guests } });

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });

    const confirmation = screen.getByPlaceholderText("confirmation");

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(confirmation).toHaveValue("success");

   });
  
});