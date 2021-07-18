const Intern = require('../lib/Intern');

test('verify employee school', () => {
    const school = "education"
    const intern = new Intern(1, "emily", "emily@email.com", school)

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe(school);
})