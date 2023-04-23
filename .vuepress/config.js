import {defaultTheme, defineUserConfig} from 'vuepress'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import {fs, getDirname, path} from '@vuepress/utils'
import {palettePlugin} from "@vuepress/plugin-palette";
import {searchPlugin} from "@vuepress/plugin-search";
import {gitPlugin} from "@vuepress/plugin-git";
import * as dotenv from 'dotenv'

dotenv.config()
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: 'en-US',
    title: 'Froxlor Documentation',
    description: 'Froxlor is the lightweight server management software for your needs.',

    base: process.env.VERSION,
    dest: 'dist',

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        palettePlugin({preset: 'sass'}),
        searchPlugin({
			// exclude the homepage
			isSearchable: (page) => page.path !== '/',
		}),
        gitPlugin({
            contributors: false
        }),
    ],

    theme: defaultTheme({
        logo: '/logo.png',
        logoDark: '/logo_white.png',

        docsRepo: 'https://github.com/Froxlor/Documentation',

        navbar: [
            {
                text: 'v2',
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
                                link: '/general/installation/tarball.md'
                            },
                            {
                                text: 'Debian/Ubuntu',
                                link: '/general/installation/apt-package.md'
                            },
                            {
                                text: 'Git (developer)',
                                link: '/general/installation/source.md'
                            },
                        ],
                    },
                    {
                        text: 'Update Guide',
                        link: '/general/update-guide.md'
                    },
                    {
                        text: 'Migration Guide',
                        link: '/general/migration-guide.md'
                    },
					{
						text: 'Uninstall',
						link: '/general/uninstall.md'
					},
                ],
            },
            {
                text: '2. Admin Guide',
                link: '/admin-guide/',
                collapsible: true,
                children: [
                    {
                        text: 'Configuration',
                        link: '/admin-guide/configuration/',
                        children: [
                            {
                                text: 'PHP-FPM',
                                link: '/admin-guide/configuration/php-fpm/'
                            },
                            {
                                text: 'FCGID',
                                link: '/admin-guide/configuration/fcgid/'
                            }
                        ]
                    },
                    {
                        text: 'Settings',
                        link: '/admin-guide/settings/'
                    },
                    {
                        text: 'Resources',
                        link: '/admin-guide/resources/',
                        children: [
                            {
                                text: 'IPs & Ports',
                                link: '/admin-guide/resources/ips-and-ports/'
                            },
                            {
                                text: 'Admins / Resellers',
                                link: '/admin-guide/resources/admins-resellers/'
                            },
                            {
                                text: 'Customers',
                                link: '/admin-guide/resources/customers/'
                            },
                            {
                                text: 'Domains',
                                link: '/admin-guide/resources/domains/'
                            },
                            {
                                text: 'MySQL Servers',
                                link: '/admin-guide/resources/mysql-servers/'
                            },
                            {
                                text: 'Hosting Plans',
                                link: '/admin-guide/resources/hosting-plans/'
                            },
                            {
                                text: 'SSL Certificates',
                                link: '/admin-guide/resources/ssl-certificates/'
                            }
                        ]
                    },
                    {
                        text: 'PHP Configurations',
                        link: '/admin-guide/php-versions-and-configuration/'
                    },
					{
						text: 'Miscellaneous',
						link: '/admin-guide/miscellaneous/'
					},
                    {
                        text: 'Domain import',
                        link: '/admin-guide/domain-import/'
                    },
                    {
                        text: 'Froxlor console scripts (CLI)',
                        link: '/admin-guide/cli-scripts/'
                    },
                ]
            },
            {
                text: '3. User Guide',
                link: '/user-guide/',
                collapsible: true,
                children: [
                    {
                        text: 'E-Mails',
                        link: '/user-guide/emails/',
                    },
                    {
                        text: 'Databases (MySQL)',
                        link: '/user-guide/databases/'
                    },
                    {
                        text: 'Domains / Subdomains',
                        link: '/user-guide/domains/'
                    },
                    {
                        text: 'FTP Accounts',
                        link: '/user-guide/ftp-accounts/'
                    },
                    {
                        text: 'Extras',
                        link: '/user-guide/extras/'
                    },
                    {
                        text: 'Traffic',
                        link: '/user-guide/traffic/'
                    },
                ]
            },
            {
                text: '4. API Guide',
                link: '/api-guide',
                collapsible: true,
                children: [
                    getChildren('api-guide/commands', "Commands")
                ]
            },
            {
                text: '5. Security',
                link: '/security/'
            },
            {
                text: '6. Contribution',
                link: '/contribution/'
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

    files.forEach(element => {
        children.push(`/${folder}/${element}`)
    });

    return {text: text, children: [...children], collapsible: true};
}
