import { database } from "./firebase";
import { ref, set } from "firebase/database";
import { ContactFormProps } from "./types";
import { v7 as uuidv7 } from "uuid";

export const writeContactForm = async (contactData: ContactFormProps) => {
  const { name, email, phone, website, linkedin, newsletter } = contactData;

  try {
    await set(ref(database, `contact-requests/${uuidv7()}`), {
      username: name,
      email,
      phone,
      website,
      linkedin,
      newsletter: newsletter.toString(),
      date: new Date().toLocaleString(),
    });
  } catch (error) {
    console.error("Error writing contact form data: ", error);
  }
};

export const subscribeToNewsletter = async (
  email: ContactFormProps["email"]
) => {
  try {
    await set(ref(database, `newsletter-subscription/${uuidv7()}`), {
      email,
    });
  } catch (error) {
    console.error("Error writing email: ", error);
  }
};
