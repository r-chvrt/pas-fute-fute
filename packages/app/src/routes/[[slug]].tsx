import { createUniqueRandomQuoteGenerator, findQuoteBySlug } from '@pas-fute-fute/data';
import { Link, Meta, Title } from '@solidjs/meta';
import { A, useNavigate, useParams } from '@solidjs/router';
import { createSignal, Suspense } from 'solid-js';
import { Button } from '~/components/button';
import { Card, CardHeader } from '~/components/card';
import { useCopy } from '~/libs/copy';

export default function Home() {
  const params = useParams();
  const navigate = useNavigate();
  const getUniqueRandomQuote = createUniqueRandomQuoteGenerator();

  const getInitialQuote = () => {
    if (params.slug) {
      return findQuoteBySlug({ slug: params.slug }) ?? getUniqueRandomQuote();
    }

    return getUniqueRandomQuote();
  };

  const [getQuote, setQuote] = createSignal(getInitialQuote());

  const refreshQuote = () => {
    const quote = getUniqueRandomQuote();
    setQuote(quote);
    navigate(`/${quote.slug}`, { replace: true });
  };

  const { copy, getIsJustCopied } = useCopy(() => getQuote().quote);

  return (
    <main class="mt-8">
      <Title>
        PasFuteFute
        {' '}
        -
        {' '}
        {getQuote().quote}
      </Title>
      <Meta name="description" content="Le répertoire des expressions françaises pour décrire les moins futé·e·s." />
      <Link rel="canonical" href={`https://pasfutefute.fr/${getQuote().slug}`} />

      <div class="max-w-800px mx-auto ">
        <Card class="text-center text-lg w-full">
          <CardHeader>
            <Suspense fallback="&nbsp;">
              {getQuote().quote}
            </Suspense>
          </CardHeader>
        </Card>

        <div class="mt-4 flex gap-2 flex-col sm:flex-row justify-between">
          <Button as={A} href="/liste" variant="secondary">
            <div class="i-tabler-list mr-2" />
            Toutes les expressions
          </Button>

          <div class="flex gap-2 flex-col sm:flex-row">
            <Button
              variant="secondary"
              onClick={copy}
            >
              {getIsJustCopied()
                ? (
                    <>
                      <div class="i-tabler-check mr-2 text-primary" />
                      Citation copiée!
                    </>
                  )
                : (
                    <>
                      <div class="i-tabler-copy mr-2" />
                      Copier la citation
                    </>
                  )}
            </Button>

            <Button onClick={refreshQuote}>
              <div class="i-tabler-refresh mr-2" />
              Une autre citation aléatoire
            </Button>
          </div>
        </div>

      </div>

      <hr class="my-24" />

      <div class="prose mx-auto max-w-800px text-base">

        <h2 id="a-propos-de-pasfutefute">À propos de PasFuteFute</h2>
        <p>
          <strong>PasFuteFute</strong>
          {' '}
          est un projet dédié aux expressions françaises amusantes et imagées pour décrire quelqu'un de manière polie mais taquine. Ceci est un fork du projet initial.
        </p>
      </div>

    </main>
  );
}
