import { database } from "./firebase";
import { ref, set } from "firebase/database";
import { ContactForm } from "./types";
import { v4 as uuidv4 } from "uuid";

export const writeContactForm = async (contactData: ContactForm) => {
  const { name, email, phone, website, linkedin, newsletter } = contactData;

  try {
    await set(ref(database, `contact-requests/${uuidv4()}`), {
      username: name,
      email,
      phone,
      website,
      linkedin,
      newsletter: newsletter.toString(),
    });
  } catch (error) {
    console.error("Error writing contact form data: ", error);
  }
};

export const subscribeToNewsletter = async (email: ContactForm["email"]) => {
  try {
    await set(ref(database, `newsletter-subscription/${uuidv4()}`), {
      email,
    });
  } catch (error) {
    console.error("Error writing email: ", error);
  }
};
