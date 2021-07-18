const Engineer = require('../lib/Engineer');

test('verify employee github', () => {
    const github = "thisisgithub"
    const engineer = new Engineer(1, "emily", "emily@email.com", github)

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGitHub()).toBe(github);
})

