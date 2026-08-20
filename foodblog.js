new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Food Blog',
            navItems: [
                { text: 'Home', href: '#' },
                { text: 'Recipes', href: '#' },
                { text: 'Lifestyles', href: '#' },
                { text: 'Videos', href: '#' },
                { text: 'About', href: '#' }
            ]
        },
        photo: {
            src: 'images/chili.jpg',
            alt: 'White Chicken Chili'
        },
        profilePlaceholder: {
            src: 'images/profile.png'
        },
        footer: {
            text: 'Copyright FOOD BLOG'
        },
        selectedAuthor: '',
        authorInfo: {
            Brianna: {
                level: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
            },
            LINH: {
                level: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
            },
            'CATHERINE LEONARDO': {
                level: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
            },
            KALI: {
                level: 'Novice',
                bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
            }
        },
        posts: [
            {
                id: 1,
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: "Was amazing! My Walmart didn't have coriander in stock and didn't have ground cumin. I used serrano instead of jalapeno. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!"
            },
            {
                id: 2,
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: "I just made this soup today and it's so tasty! Didn't have corn at home but still turned out very good. It's a winner! I made beef chili for my parents; but since my dad has gout he can't eat beef; this white chicken chili is perfect for him. Thank you Lisa!"
            },
            {
                id: 3,
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: "I LOVE this White Chicken Chili! You are right, it is a satiating meal - delicious with toasted bread. Refreshingly different taste than any chicken chili I've made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure."
            },
            {
                id: 4,
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: "This recipe is dynamite! My partner usually won't eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is a crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!"
            }
        ]
    },
    computed: {
        selectedAuthorInfo: function() {
            return this.authorInfo[this.selectedAuthor] || {
                level: 'Unknown',
                bio: 'No bio available.'
            };
        }
    },
    methods: {
        openAuthorCard: function(authorName) {
            this.selectedAuthor = authorName;
        },
        closeAuthorCard: function() {
            this.selectedAuthor = '';
        }
    },
    components: {
        'blog-header': {
            props: ['title', 'navItems'],
            template: `
                <header class="card-header blog-header py-4 px-4 px-lg-5">
                    <div class="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center">
                        <h1 class="blog-title mb-3 mb-lg-0">{{ title }}</h1>
                        <nav aria-label="Primary Navigation">
                            <ul class="nav blog-nav justify-content-center justify-content-lg-end">
                                <li class="nav-item" v-for="item in navItems" :key="item.text">
                                    <a class="nav-link" :href="item.href">{{ item.text }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            `
        },
        'blog-post': {
            props: ['post', 'profileSrc', 'onProfileClick'],
            template: `
                <article class="post">
                    <div class="post-header">
                        <img
                            class="profile-thumb"
                            :src="profileSrc"
                            :alt="post.author + ' profile image'"
                            width="54"
                            height="54"
                            @click="onProfileClick(post.author)">
                        <div class="post-meta">
                            <span class="author">{{ post.author }}</span> -
                            <span class="date">{{ post.date }}</span>
                            <span class="reply">REPLY</span>
                        </div>
                    </div>
                    <p class="mb-0">{{ post.content }}</p>
                </article>
            `
        },
        'blog-footer': {
            props: ['text'],
            template: '<footer class="card-footer blog-footer py-3">&copy; {{ text }}</footer>'
        }
    }
});
