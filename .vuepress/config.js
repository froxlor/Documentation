import {defaultTheme, defineUserConfig} from 'vuepress'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import { getDirname, path } from '@vuepress/utils'
import {palettePlugin} from "@vuepress/plugin-palette";
import {searchPlugin} from "@vuepress/plugin-search";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: 'en-US',
    title: 'Froxlor Documentation',
    description: 'Froxlor is the lightweight server management software for your needs.',

    dest: 'dist',

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        palettePlugin({ preset: 'sass' }),
        searchPlugin({}),
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
                        link: '/v2/',
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
                text: 'General',
                link: '/v2/general/',
                children: [
                    {
                        text: 'Installation',
                        link: '/v2/general/installation/',
                        children: [
                            {
                                text: 'Manual (tarball)',
                                link: '/v2/general/installation/tarball.md'
                            },
                            {
                                text: 'Debian/Ubuntu',
                                link: '/v2/general/installation/apt-package.md'
                            },
                            {
                                text: 'Git (developer)',
                                link: '/v2/general/installation/source.md'
                            },
                        ],
                    },
                    {
                        text: 'Configuration',
                        link: '/v2/general/configuration/'
                    },
                    {
                        text: 'Update Guide',
                        link: '/v2/general/update-guide.md'
                    },
                    {
                        text: 'Migration Guide',
                        link: '/v2/general/migration-guide.md'
                    },
                ],
            },
            {
                text: 'Admin Guide',
                link: '/v2/admin-guide/',
                children: [
                    {
                        text: 'Configuration',
                        link: '/v2/admin-guide/configuration/',
                        children: [
                            {
                                text: 'PHP-FPM',
                                link: '/v2/admin-guide/configuration/php-fpm/'
                            },
                            {
                                text: 'FCGID',
                                link: '/v2/admin-guide/configuration/fcgid/'
                            }
                        ]
                    },
                    {
                        text: 'Settings',
                        link: '/v2/admin-guide/settings/'
                    },
                    {
                        text: 'Resources',
                        link: '/v2/admin-guide/resources/',
                        children: [
                            {
                                text: 'IPs & Ports',
                                link: '/v2/admin-guide/resources/ips-and-ports/'
                            },
                            {
                                text: 'Admins / Resellers',
                                link: '/v2/admin-guide/resources/admins-resellers/'
                            },
                            {
                                text: 'Customers',
                                link: '/v2/admin-guide/resources/customers/'
                            },
                            {
                                text: 'Domains',
                                link: '/v2/admin-guide/resources/domains/'
                            },
                            {
                                text: 'MySQL Servers',
                                link: '/v2/admin-guide/resources/mysql-servers/'
                            },
                            {
                                text: 'Hosting Plans',
                                link: '/v2/admin-guide/resources/hosting-plans/'
                            },
                            {
                                text: 'SSL Certificates',
                                link: '/v2/admin-guide/resources/ssl-certificates/'
                            }
                        ]
                    },
                    {
                        text: 'PHP Configurations',
                        link: '/v2/admin-guide/php-versions-and-configuration/'
                    },
                    {
                        text: 'Domain import',
                        link: '/v2/admin-guide/domain-import/'
                    },
                    {
                        text: 'Froxlor console scripts (CLI)',
                        link: '/v2/admin-guide/helper-scripts/'
                    },
                ]
            },
            {
                text: 'User Guide',
                link: '/v2/user-guide/',
                children: [
                    {
                        text: 'E-Mails',
                        link: '/v2/user-guide/emails/',
                        children: [
                            {
                                text: 'E-Mail Accounts',
                                link: '/v2/user-guide/emails/accounts/'
                            },
                            {
                                text: 'E-Mail Domains',
                                link: '/v2/user-guide/emails/domains/'
                            },
                        ]
                    },
                    {
                        text: 'Databases',
                        link: '/v2/user-guide/databases/'
                    },
                    {
                        text: 'Domains',
                        link: '/v2/user-guide/domains/'
                    },
                    {
                        text: 'FTP Accounts',
                        link: '/v2/user-guide/ftp-accounts/'
                    },
                    {
                        text: 'Extras',
                        link: '/v2/user-guide/extras/'
                    },
                    {
                        text: 'Traffic',
                        link: '/v2/user-guide/traffic/'
                    },
                ]
            },
            {
                text: 'API Guide',
                link: '/v2/api-guide/'
            },
            {
                text: 'Security',
                link: '/v2/security/'
            },
            {
                text: 'Contribution',
                link: '/v2/contribution/'
            },
        ],
    }),
})