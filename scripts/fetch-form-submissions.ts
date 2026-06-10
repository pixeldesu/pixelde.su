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

try {
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

  if (json) {
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
  else {
    console.log("Form submissions fetched successfully, result object was empty?");
  }
}
catch (e: any) {
  console.log(`Error while fetching form submissions: ${e.message}`);
}
