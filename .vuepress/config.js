import { defaultTheme, defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import {fs, getDirname, path} from '@vuepress/utils'
import { palettePlugin } from "@vuepress/plugin-palette";
import { searchPlugin } from "@vuepress/plugin-search";
import { gitPlugin } from "@vuepress/plugin-git";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: 'en-US',
    title: 'Froxlor Documentation',
    description: 'Froxlor is the lightweight server management software for your needs.',

    base: '/v0.10/',
    dest: 'dist',

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        palettePlugin({ preset: 'sass' }),
        searchPlugin({}),
        gitPlugin({
            contributors: false
        }),
    ],

    theme: defaultTheme({
        logo: '/logo.png',
        logoDark: '/logo_white.png',

        docsRepo: 'https://github.com/Froxlor/Documentation',
        docsBranch: '0.10.x',

        navbar: [
            {
                text: 'v0.10',
                children: [
                    {
                        text: 'v2',
                        link: 'https://docs.froxlor.org/v2/',
                    },
                    {
                        text: 'v0.10',
                        link: 'https://docs.froxlor.org/v0.10/',
                    }
                ],
            },
            {
                text: 'Discord',
                link: 'https://discord.froxlor.org',
            },
            {
                text: 'GitHub',
                children: [
                    {
                        text: 'Froxlor',
                        link: 'https://github.com/Froxlor/Froxlor',
                    },
                    {
                        text: 'Documentation',
                        link: 'https://github.com/Froxlor/Documentation',
                    }
                ],
            }
        ],

        sidebar: [
            {
                text: '1. General',
                link: '/general/',
                collapsible: true,
                children: [
                    {
                        text: 'Installation',
                        link: '/general/installation/',
                        children: [
                            {
                                text: 'Manual (tarball)',
                                link: '/general/installation/tarball'
                            },
                            {
                                text: 'Debian/Ubuntu',
                                link: '/general/installation/apt-package'
                            },
                            {
                                text: 'Gentoo',
                                link: '/general/installation/gentoo'
                            },
                            {
                                text: 'Git (developer)',
                                link: '/general/installation/source'
                            },
                        ],
                    },
                    {
                        text: 'Configuration',
                        link: '/general/configuration/',
                        children: [
                            {
                                text: 'PHP-FPM',
                                link: '/general/configuration/php-fpm'
                            },
                            {
                                text: 'FCGID',
                                link: '/general/configuration/fcgid'
                            },
                        ],
                    },
                    {
                        text: 'Update Guide',
                        link: '/general/update/'
                    },
                ],
            },
            {
                text: '2. Admin Guide',
                link: '/admin-guide/',
                collapsible: true,
                children: [
                    {
                        text: 'Domain Import',
                        link: '/admin-guide/domain-import'
                    },
                    {
                        text: 'Helper scripts',
                        link: '/admin-guide/helper-scripts'
                    }
                ]
            },
            {
                text: '3. API Guide',
                link: '/api-guide/',
                collapsible: true,
                children: getChildren('api-guide/commands', 'Commands'),
            },
        ],
    }),
})

function getChildren(folder, text) {
    const extension = [".md"];
    const children = [];
    const files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
            (item) =>
                item.toLowerCase() !== "readme.md" &&
                fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
                extension.includes(path.extname(item))
        );

    files.forEach(file => {
        children.push(`/${folder}/${file}`)
    })

    return [{ text: text, children: [...children], collapsible: true }];
}