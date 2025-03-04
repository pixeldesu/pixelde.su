export default async function () {
  const API_ROOT = "https://api.netlify.com/api/v1";
  const FORM_ID = Deno.env.get("NETLIFY_FORM");
  const NETLIFY_TOKEN = Deno.env.get("NETLIFY_TOKEN");

  type FormSubmission = {
    name: string;
    summary: string;
    created_at: string;
  };

  type GuestbookEntry = {
    name: string;
    message: string;
    date: string;
  };

  const guestbookEntries: GuestbookEntry[] = [];

  const response = await fetch(
    `${API_ROOT}/forms/${FORM_ID}/submissions`,
    {
      headers: {
        "Authorization": `Bearer ${NETLIFY_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );
  const json = await response.json();

  json.forEach((entry: FormSubmission) => {
    guestbookEntries.push({
      name: entry.name.length > 0 ? entry.name : "Anonymous",
      message: entry.summary,
      date: entry.created_at,
    });
  });

  Deno.writeTextFile(
    `./src/_data/guestbook.json`,
    JSON.stringify(guestbookEntries),
  );
}
