// @refresh reload
import { Suspense } from 'solid-js';
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title, Link,
} from 'solid-start';
import './root.css';
import { TopAppBar } from '~/design-system/top-app-bar/TopAppBar';

export default function Root() {
  return (
      <Html lang="en">
        <Head>
          <Title>resrc Blog</Title>
          <Meta charset="utf-8"/>
          <Meta name="viewport" content="width=device-width, initial-scale=1"/>
          <Link
              rel="preconnect"
              href="https://fonts.googleapis.com"
              crossorigin="anonymous"/>
          <Link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin="anonymous"/>
          <Link
              href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
              rel="stylesheet"
              crossorigin="anonymous"/>
          <Link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"/>
          <Link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"/>
        </Head>
        <Body>
          <Suspense>
            <ErrorBoundary>
              <TopAppBar
                  middle={
                    <div>resrc</div>
                  }
              />
              <Routes>
                <FileRoutes/>
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts/>
        </Body>
      </Html>
  );
}
