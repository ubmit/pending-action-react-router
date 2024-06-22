import { ActionFunctionArgs, Form } from "react-router-dom";

export const bookingLoader = () => {
  return null;
};

async function createBooking(title: string) {
  console.log("Creating booking with title", title);
  return new Promise((res) => setTimeout(res, 1000));
}

export const bookingAction = async ({ request }: ActionFunctionArgs) => {
  let formData = await request.formData();
  let title = String(formData.get("title"));
  await createBooking(title);
  return null;
};

export function Booking() {
  return (
    <Form method="POST">
      <label htmlFor="title-input-id">Title</label>
      <input name="title" id="title-input-id" />
      <button>Submit</button>
    </Form>
  );
}
