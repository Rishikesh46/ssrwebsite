export default function Section({ styles, section }) {
  return (
    <section className={styles["section"]}>
      <h1>{section.sectionHeading}</h1>
      <div className={styles["section-contain"]}>
        {section.sectionImage ? (
          <div className={styles["section-image"]}>
            <img src={section.sectionImage} alt="Section Image" />
          </div>
        ) : (
          <></>
        )}

        <div className={styles["section-details"]}>
          {section.sectionContent.map((content) => {
            return (
              <div className={styles["container1"]}>
                <h3 className={styles["container1-h3"]}>
                  {content.subHeading}
                </h3>
                <p className={styles["container1-p"]}>{content.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
