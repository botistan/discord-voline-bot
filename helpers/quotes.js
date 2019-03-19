const quotes = [
  '"To maintain that anarchism is only a theory of classes is to limit it to a single viewpoint. Anarchism is more complex and pluralistic, like life itself. Its class element is above all its means of fighting for liberation; its humanitarian character is its ethical aspect, the foundation of society; its individualism is the goal of mankind."\n-Vsevolod Mikhailovich Eikhenbaum',
  '"The pleasure of destruction is a creative pleasure."\n-Mikhail Bakunin',
  '"If God really existed, we would have to make him disappear."\n-Mikhail Bakunin',
  '"I hate Communism because it is the negation of liberty and because humanity is for me unthinkable without liberty.\n\n I am not a Communist, because Communism concentrates and swallows up in itself for the benefit of the State all the forces of society, because it inevitably leads to the concentration of property in the hands of the State, whereas I want the abolition of the State, the final eradication of the principle of authority and the patronage proper to the State, which under the pretext of moralizing and civilizing men has hitherto only enslaved, persecuted, exploited and corrupted them.\n\n I want to see society and collective or social property organized from below upwards, by way of free association, not from above downwards, by means of any kind of authority whatsoever."\n-Mikhail Bakunin',
  '"Power should not be conquered, it should be destroyed."\n-Mikhail Bakunin',
  '"The oppression of a people or even of a single individual is the oppression of all and one can not violate the freedom of one without violating the freedom of each."\n-Mikhail Bakunin',
  '"Unity is the great goal toward which humanity moves irresistibly. But it becomes fatal, destructive of the intelligence, the dignity, the well-being of individuals and peoples whenever it is formed without regard to liberty, either by violent means or under the authority of any theological, metaphysical, political, or even economic idea."\n-Mikhail Bakunin',
  '"We are convinced that liberty without socialism is privilege, injustice; and that socialism without liberty is slavery and brutality."\n-Mikhail Bakunin',
  '"What all other men are is of the greatest importance to me. However independent I may imagine myself to be, however far removed I may appear from mundane considerations by my social status, I am enslaved to the misery of the meanest member of society. The outcast is my daily menace. Whether I am Pope, Czar, Emperor, or even Prime Minister, I am always the creature of their circumstance, the conscious product of their ignorance, want and clamoring. They are in slavery, and I, the superior one, am enslaved in consequence."\n-Mikhail Bakunin',
  '"To revolt is a natural tendency of life. Even a worm turns against the foot that crushes it. In general, the vitality and relative dignity of an animal can be measured by the intensity of its instinct to revolt.”\n-Mikhail Bakunin',
  '"Revolution requires extensive and widespread destruction, a fecund and renovating destruction, since in this way and only this way are new worlds born."\n-Mikhail Bakunin',
  '"If there is a State, there must be domination of one class by another and, as a result, slavery; the State without slavery is unthinkable – and this is why we are the enemies of the State."\n-Mikhail Bakunin',
  '"When the people are being beaten with a stick, they are not much happier if it is called "the People\'s Stick."\n-Mikhail Bakunin',
  '"All exercise of authority perverts, and submission to authority humiliates."\n-Mikhail Bakunin',
  '"Even the most wretched individual of our present society could not exist and develop without the cumulative social efforts of countless generations. Thus the individual, his freedom and reason, are the products of society, and not vice versa: society is not the product of individuals comprising it; and the higher, the more fully the individual is developed, the greater his freedom — and the more he is the product of society, the more does he receive from society and the greater his debt to it."\n-Mikhail Bakunin',
  '"By striving to do the impossible, man has always achieved what is possible."\n-Mikhail Bakunin',
  '"The peoples\' revolution .... will arrange its revolutionary organisation from the bottom up and from the periphery to the centre, in keeping with the principle of liberty."\n-Mikhail Bakunin',
  '"I am not myself free or human until or unless I recognize the freedom and humanity of all my fellowmen.”\n-Mikhail Bakunin',
  '"We are firmly convinced that the most imperfect republic is a thousand times better than the most enlightened monarchy. In a republic, there are at least brief periods when the people, while continually exploited, is not oppressed; in the monarchies, oppression is constant.”\n-Mikhail Bakunin',
  '"he liberty of man consists solely in this: that he obeys natural laws because he has himself recognized them as such, and not because they have been externally imposed upon him by any extrinsic will whatever, divine or human, collective or individual."\n-Mikhail Bakunin',
  '"Of escape there are but three methods — two chimerical and a third real. The first two are the dram-shop and the church, debauchery of the body or debauchery of the mind; the third is social revolution."\n-Mikhail Bakunin',
  '"To be governed is to be watched over, inspected, spied on, directed, legislated at, regulated, docketed, indoctrinated, preached at, controlled, assessed, weighed, censored, ordered about, by men who have neither the right, nor the knowledge, nor the virtue."\n-Pierre-Joseph Proudhon',
  '"I protest against every order with which some authority may feel pleased on the basis of some alleged necessity to over-rule my free will.\n\n Laws: We know what they are, and what they are worth! They are spider webs for the rich and mighty, steel chains for the poor and weak, fishing nets in the hands of government."\n-Pierre-Joseph Proudhon',
  '"All parties without exception, when they seek for power, are varieties of absolutism."\n-Pierre-Joseph Proudhon',
  '"Property is theft!"\n-Pierre-Joseph Proudhon',
  '"I build no system. I ask an end to privilege, the abolition of slavery, equality of rights, and the reign of law. Justice, nothing else; that is the alpha and omega of my argument: to others I leave the business of governing the world."\n-Pierre-Joseph Proudhon',
  '"As man seeks justice in equality, so society seeks order in anarchy."\n-Pierre-Joseph Proudhon',
  '"The means of production being the collective work of humanity, the product should be the collective property of the race. Individual appropriation is neither just nor serviceable. All belongs to all. All things are for all men, since all men have need of them, since all men have worked in the measure of their strength to produce them, and since it is not possible to evaluate every one\'s part in the production of the world\'s wealth. All things are for all."\n-Piotr Kropotkin',
  '"ANARCHISM, the name given to a principle or theory of life and conduct under which society is conceived without government — harmony in such a society being obtained, not by submission to law, or by obedience to any authority, but by free agreements concluded between the various groups, territorial and professional, freely constituted for the sake of production and consumption, as also for the satisfaction of the infinite variety of needs and aspirations of a civilized being."\n-Piotr Kropotkin',
  '"When men are reasonable enough to follow their natural instincts, they will unite across the frontiers and constitute the Cosmos."\n-Piotr Kropotkin',
  '"Sociability is as much a law of nature as mutual struggle."\n-Piotr Kropotkin',
  '"Vive la république, et vive la France"\n-Emmanuel Macron',
  '"You know how I always believe in the future ... Without disorder, the revolution is impossible; knowing that, I did not lose hope, and I do not lose it now."\n-Piotr Kropotkin',
  '"The law is an adroit mixture of customs that are beneficial to society, and could be followed even if no law existed, and others that are of advantage to a ruling minority, but harmful to the masses of men, and can be enforced on them only by terror."\n-Piotr Kropotkin',
  '"There are periods in the life of human society when revolution becomes an imperative necessity, when it proclaims itself as inevitable."\n-Piotr Kropotkin',
  '"If man, since his origin, has always lived in societies, the State is but one of the forms of social life, quite recent as far as regards European societies."\n-Piotr Kropotkin',
  '"When we ask for the abolition of the State and its organs we are always told that we dream of a society composed of men better than they are in reality. But no; a thousand times, no. All we ask is that men should not be made worse than they are, by such institutions!"\n-Piotr Kropotkin',
  '"It is often said that Anarchists live in a world of dreams to come, and do not see the things which happen today. We do see them only too well, and in their true colors, and that is what makes us carry the hatchet into the forest of prejudice that besets us."\n-Piotr Kropotkin',
  '"Whoever will be free must make himself free. Freedom is no fairy gift to fall into a man\'s lap."\n-Max Stirner',
  '"The State’s behavior is violence, and it calls its violence “law”; that of the individual, “crime.” "\n-Max Stirner',
  '""Freedom" awakens your rage against everything that is not you; "egoism" calls you to joy over yourselves, to self-enjoyment. "\n-Max Stirner',
  '"The people is dead! Good-day, Self!"\n-Max Stirner',
  '"You have your thoughts and I have mine. This is the fact and you can\'t change it even if you kill me."\n-Ba Jin',
  '"Only by not forgetting the past can we be the master of the future."\n-Ba Jin',
  '"The revolutionary path begins at destruction, thus opening up new ways for progress. However, revolution does not stop at destruction. There can be no destruction without construction; no construction without destruction... In the mind of the revolutionist, these two are indivisibly linked: destruction, ergo construction"\n-Shin Chaeho',
  '"Those who sacrifice to patriotism politics, education, business, are traitors to civilization, enemies of progress, must be considered as criminals of humanity."\n-Shusui Kotoku',
  '"I believe I have succeeded in explaining and clarifying the nature of patriotism, which is called the love of the country.\n\n It is summed up in an animal instinct, in superstition, in fanaticism, in vanity, in bellicose sentiment."\n-Shusui Kotoku',
  '"All the people of the world are like brothers. Naturally we love one another. But the governments invented patriotism. Soldiers are trained to kill ........The laws are simply established customs....Disorders came from contention, and contentions, from evil society, and when society is evil, the laws fail to do good....."\n-Liu Shifu',
  '"A Revolution must be the ruin not of a government, but of the Government"\n-Anselme Belleguarrigue',
  '"Have you believed until now that there were tyrants? Well ! you are mistaken, there are only slaves: where no one obeys, no one commands."\n-Anselme Belleguarrigue',
  '"The word "State" is identical to the word "War"."\n-Piotr Kropotkin',
  '"All laws are wicked, all judgments are unfair, all judges are bad, all convicts are innocent."\n-Libertad',
  '"Proletarians of the whole world, go down to your own depths, seek the truth, create it yourself, you will not find it anywhere else."\n-Nestor Makhno',
  '"Being able to freely elect masters does not remove masters or slaves."\n-Herbert Marcuse',
  '"If in order to win you have to hang on the public squares, I prefer to be defeated."\n-Errico Malatesta',
  '"Our place in humanity, as women, should not be begged, but taken"\n-Louise Michel',
  '"The revolution will be the flowering of humanity as love is the flowering of the heart."\n-Louise Michel',
  '"I cannot submit to injustices, even minor ones. Once one starts submitting to minor injustices and rationalizes them away, their accumulation creates a major oppression. That’s how entire peoples fell into slavery."\n-Martin Sostre',
  '"If you made a mistake, don\'t let the guilt swallow you up. Learn from it, and move on."\n-Lorenzo Komboa Ervin',
  '"Yes, some people want to see you fail. Don\'t deal with them. Deal with those who want to see you succeed"\n-Lorenzo Komboa Ervin',
  '"The colonial Republic has nothing to envy to fascism: both share in the arbitrary and the desire to belittle."\n-Mohamed Saïl',
  '"The libertarian tradition is vast - torrents, streams, rivers, channels, rivers and gullies flow without always joining."\n-Mohamed Saïl',
  '"The state itself is the biggest criminal. He creates criminals faster than he punishes them."\n-Benjamin Tucker',
  '"Assuming that we would compare the nation-state to a living god, then nationalism would be the correspondent religion. In spite of some seemingly positive elements, nation-state and nationalism show metaphysical characteristics."\n-Abdullah Ocalan',
  '"The right of self-determination of the peoples includes the right to a state of their own. However, the foundation of a state does not increase the freedom of a people. The system of the United Nations that is based on nation-states has remained inefficient. Meanwhile, nation-states have become serious obstacles for any social development. Democratic confederalism is the contrasting paradigm of the oppressed people. Democratic confederalism is a non-state social paradigm."\n-Abdullah Ocalan',
  '"No government fights fascism to destroy it. When the bourgeoisie sees that power is slipping out of its hands, it brings up fascism to hold onto their privileges"\n-Buenaventura Durruti',
  '"I believe, as I always have, in freedom. The freedom which rests on the sense of responsibility. I consider discipline indispensable, but it must be inner discipline, motivated by a common purpose and a strong feeling of comradeship."\n-Buenaventura Durruti',
  '"The only church that illuminates is a burning church. "\n-Buenaventura Durruti',
  '"Omnia sunt communia"',
  '"I believe that all liberty was born bathed in blood...Rights and freedom are never granted; they must be taken. Those who command give only what they must, and nations which sleep trusting their rulers to arouse them with the gift of liberty are like fools who build a city in the midst of a desert hoping that a river will suddenly flow through its barren streets."\n-Manuel Gonzalez Prada',
  '"If I can\'t dance to it, it\'s not my revolution."\n-Emma Goldman',
  '"The history of progress is written in the blood of men and women who have dared to espouse an unpopular cause, as, for instance, the black man\'s right to his body, or woman\'s right to her soul."\n-Emma Goldman',
  '"It requires less mental effort to condemn than to think."\n-Emma Goldman',
  '"A standing army is a standing menace to liberty."\n-Voltairine de Cleyre',
  '"The married woman is a bonded slave, who takes her master\'s name, her master\'s bread, and serves her master\'s passion; and who passes through the ordeal of pregnancy and the throes of travail at his dictation."\n-Voltairine de Cleyre',
  '"For thousands of years, the world has been dominated by the rule of man -and man only-, a rule which is marked by class distinctions. To rectify the wrongs, we must first abolish the rule of men and introduce equality among human beings, which means that the world must belong equally to men and women. The goal of equality cannot be achieved except through women\'s liberation."\n-He Zhen',
  `"HOMARANO

Ekbruligis mi fajron en kor',
Ĝin estingos nenia perfort' ;
Ekflamigis mi flamon en brust',
Ĝin ne povos estingi eĉ mort'.
Brulos fajr' ĝis mi vivos en mond',
Flamos flam' ĝis ekzistos la ter'.
Nom' de l' fajr' estas am' al homar',
Nom' de l' flam' estas am' al liber'."

-Vasiliy Eroshenko`,
  '"When cybernated and automatic machinery can reduce toil to the near vanishing point, nothing is more meaningless to young people than a lifetime of toil. When modern industry can provide abundance for all, nothing is more vicious to poor people than a lifetime of poverty. When all the resources exist to promote social equality, nothing is more criminal to ethnic minorities, women and homosexuals than subjugation. "\n-Murray Bookchin',
  '"If we do not do the impossible, we shall be faced with the unthinkable. "\n-Murray Bookchin',
  '"For bad wages, bad efforts. "\n-Emile Pouget',
  '"We have always lived in slums and holes in the wall. We will know how to accommodate ourselves for a while. For you must not forget that we can also build.It is we who built these palaces and cities, here in Spain and America and everywhere. We, the workers. We can build others to take their place. And better ones. We are not in the least afraid of ruins. We are going to inherit the earth; there is not the slightest doubt about that. The bourgeoisie might blast and ruin its own world before it leaves the stage of history. We carry a new worldhere, in our hearts. That world is growing in this minute. "\n-Buenaventura Durruti',
  '"Anarchists know that a long period of education must precede any great fundamental change in society, hence they do not believe in vote begging, nor political campaigns, but rather in the development of self-thinking individuals.\nWe look away from government for relief, because we know that force (legalized) invades the personal liberty of man, seizes upon the natural elements and intervenes between man and natural laws; from this exercise of force through governments flows nearly all the misery, poverty, crime and confusion existing in society. "\n-Lucy Parsons',
  '"Governments never lead; they follow progress. When the prison, stake or scaffold can no longer silence the voice of the protesting minority, progress moves on a step, but not until then. "\n-Lucy Parsons',
  '"Do not buy finery or jewels, because books are worth more than they are. Adorn your understanding with their precious ideas, because there is no luxury that dazzles like the luxury of science. "\n-Luisa Capetillo',
  '"Though I actually feel it is a pity to do away with the current sovereign in his capacity as an individual, as sovereign of a system that oppresses us he is the one who stands at its apex, and it is therefore unavoidable. It is necessary, that is, because he is the leader of the spoilers. The reason why I think it is a pity is that he merely leaves things up to his government officials, and cannot know anything firsthand about society. I think that if we were able now to speak with him a little in person about democracy, he might come to understand and put a stop to this persecution. But in the situation there is today there is no hope of our having an opportunity to speak to the sovereign. He is a noble and great person, so it is regrettable but truly unavoidable. "\n-Kanno Sugako',
  '"Our ideal is socialism, which aims at the equality of all classes. But just as a great building cannot be destroyed in a moment, the existing hierarchical class system, which has been consolidated over many years, cannot be overthrown in a day and a night ... So we [women] must first of all achieve the fundamanetal principle of \'self-awareness\', and develop our potential, uplift our character, and then gradually work toward the realization of our ideal. "\n-Kanno Sugako',
  '"I couldn\'t have thrown that bomb. I as at home making bombs. "\n-Louis Lingg',
  '"I have no particular love for the idealised \'worker\' as he appears in the bourgeois Communist\'s mind, but when I see an actual flesh-and-blood worker in conflict with his natural enemy, the policeman, I do not have to ask myself which side I am on. "\n-George Orwell',
  '"Tout d\'abord, il n\'est pas vrai que la nature et le rôle du gouvernement changeraient si les conditions sociales étaient changées. L\'organe et la fonction sont des données inséparables. Otez sa fonction à un organe : l\'organe meurt, ou bien sa fonction se reconstitue. Faites entrer une armée dans un pays où il n\'y ait aucune cause de guerre, intestine ou avec l\'extérieur, ni aucune peur à ce sujet : l\'armée provoquera la guerre ou elle se dispersera si elle n\'y arrive pas. Là où il n\'y aurait ni crimes à découvrir ni délinquants à arrêter, une police provoquera et inventera crimes et délinquants ou bien elle disparaîtra."\n-Errico Malatesta',
];

module.exports = {
  quotes,
};
