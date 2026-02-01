import { render, screen, fireEvent } from "@testing-library/react";
import { Contact } from "../src/Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
    
    // Test 1: Component renders successfully
    test("should render the Contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    // Test 2: Heading with email text is rendered
    test("should render heading with correct contact email", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("Contact me on mr.vjai.3@gmail.com");
    });

    // Test 3: Form is rendered
    test("should render a form element", () => {
        const { container } = render(<Contact />);
        const form = container.querySelector("form");
        expect(form).toBeInTheDocument();
    });

    // Test 4: All input fields are rendered
    test("should render all three input fields (name, email, message)", () => {
        render(<Contact />);
        const textboxes = screen.getAllByRole("textbox");
        expect(textboxes).toHaveLength(3);
    });

    // Test 5: Name input field
    test("should render name input field with correct placeholder", () => {
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText("Enter your name");
        expect(nameInput).toBeInTheDocument();
        expect(nameInput).toHaveAttribute("type", "text");
    });

    // Test 6: Email input field
    test("should render email input field with correct placeholder", () => {
        render(<Contact />);
        const emailInput = screen.getByPlaceholderText("Enter your email");
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute("type", "email");
    });

    // Test 7: Message textarea field
    test("should render message textarea with correct placeholder", () => {
        render(<Contact />);
        const messageTextarea = screen.getByPlaceholderText("Enter your message");
        expect(messageTextarea).toBeInTheDocument();
    });

    // Test 8: Submit button
    test("should render submit button", () => {
        render(<Contact />);
        const submitButton = screen.getByRole("button", { name: /send/i });
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute("type", "submit");
    });

    // Test 9: Button text
    test("should have 'Send' text on submit button", () => {
        render(<Contact />);
        const submitButton = screen.getByRole("button");
        expect(submitButton).toHaveTextContent("Send");
    });

    // Test 10: Input field interactions - Name
    test("should allow typing in name input field", () => {
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText("Enter your name");
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        expect(nameInput.value).toBe("John Doe");
    });

    // Test 11: Input field interactions - Email
    test("should allow typing in email input field", () => {
        render(<Contact />);
        const emailInput = screen.getByPlaceholderText("Enter your email");
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });
        expect(emailInput.value).toBe("john@example.com");
    });

    // Test 12: Input field interactions - Message
    test("should allow typing in message textarea", () => {
        render(<Contact />);
        const messageTextarea = screen.getByPlaceholderText("Enter your message");
        fireEvent.change(messageTextarea, { target: { value: "Hello, this is a test message" } });
        expect(messageTextarea.value).toBe("Hello, this is a test message");
    });

    // Test 13: CSS classes on name input
    test("should have correct CSS classes on name input", () => {
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText("Enter your name");
        expect(nameInput).toHaveClass("m-4", "p-2", "border", "border-gray-400", "rounded");
    });

    // Test 14: CSS classes on email input
    test("should have correct CSS classes on email input", () => {
        render(<Contact />);
        const emailInput = screen.getByPlaceholderText("Enter your email");
        expect(emailInput).toHaveClass("m-4", "p-2", "border", "border-gray-400", "rounded");
    });

    // Test 15: CSS classes on textarea
    test("should have correct CSS classes on message textarea", () => {
        render(<Contact />);
        const messageTextarea = screen.getByPlaceholderText("Enter your message");
        expect(messageTextarea).toHaveClass("m-4", "p-2", "border", "border-gray-400", "rounded");
    });

    // Test 16: CSS classes on submit button
    test("should have correct CSS classes on submit button", () => {
        render(<Contact />);
        const submitButton = screen.getByRole("button", { name: /send/i });
        expect(submitButton).toHaveClass("m-4", "p-2", "bg-blue-500", "text-white", "rounded");
    });

    // Test 17: Email in bold tag
    test("should render email address in bold tag", () => {
        render(<Contact />);
        const boldEmail = screen.getByText("mr.vjai.3@gmail.com");
        expect(boldEmail.tagName).toBe("B");
    });

    // Test 18: Heading has correct class
    test("should have correct CSS class on heading", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toHaveClass("ml-4");
    });

    // Test 19: Button click event
    test("should handle button click", () => {
        render(<Contact />);
        const submitButton = screen.getByRole("button", { name: /send/i });
        fireEvent.click(submitButton);
        // Since there's no onClick handler, we're just verifying the button can be clicked
        expect(submitButton).toBeInTheDocument();
    });

    // Test 20: All elements are present
    test("should render all form elements together", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        const nameInput = screen.getByPlaceholderText("Enter your name");
        const emailInput = screen.getByPlaceholderText("Enter your email");
        const messageTextarea = screen.getByPlaceholderText("Enter your message");
        const submitButton = screen.getByRole("button", { name: /send/i });

        expect(heading).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(messageTextarea).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
});