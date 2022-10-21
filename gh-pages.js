import { publish } from 'gh-pages';

publish(
    "dist",
    {
        branch: "gh-pages",
        repo: "git@github.com:pascualex/pascualex-github.io.git",
        user: {
            name: "Alejandro Pascual Pozo",
            email: "alejandro.pascual.pozo@gmail.com",
        }
    },
    () => {
        console.log("Deploy complete!")
    }
)
