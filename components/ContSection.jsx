export default function Section({ styles, section }) {
  const bannerStyle = {
    backgroundImage: `url(${section.sectionImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "90vh",
    positon: "fixed",
  };
  return (
    <>
      <h1 className={styles["head"]}>{section.sectionHeading}</h1>
      <div style={bannerStyle}>
        <section className={styles["section"]}>
          <div className={styles["section-contain"]}>
            {section.sectionImage ? null : <></>}

            <div className={styles["section-details"]}>
              {section.sectionContent.map((content) => {
                return (
                  <div className={styles["container1"]}>
                    <div>
                      <h3 className={styles["container1-h3"]}>
                        {content.subHeading}
                      </h3>
                      <p className={styles["container1-p"]}>
                        {content.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
