describe("main homepage testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Get started by 텍스트가 존재한다.", () => {
    cy.get('[data-cy="get-started"]').should("be.visible");
  });

  it("Docs라는 a태그가 있고 href속성이 정확하게 설정되어있다.", () => {
    cy.get('[data-cy="docs"]').should(
      "have.attr",
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });
});
