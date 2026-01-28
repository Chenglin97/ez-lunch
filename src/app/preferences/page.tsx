export default function PreferencesPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Preferences</h1>
      <p style={{ marginTop: 8, opacity: 0.85 }}>
        Tell ez-lunch what you like and what you want to avoid.
      </p>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Diet</h2>
        <p style={{ marginTop: 6, opacity: 0.75 }}>
          (UI coming next) Vegetarian/vegan/etc.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Cuisines & Ingredients</h2>
        <p style={{ marginTop: 6, opacity: 0.75 }}>
          (UI coming next) Favorite cuisines, dislikes, allergies.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Budget & Logistics</h2>
        <p style={{ marginTop: 6, opacity: 0.75 }}>
          (UI coming next) Price cap, distance, lunch days.
        </p>
      </section>
    </main>
  );
}
