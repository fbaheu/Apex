import type { ThrowLess } from '@apex/throw-less';

import type { DocumentId, BaseDocumentAttributesWithId, NOTE_COLLECTION_NAME, CATEGORY_COLLECTION_NAME } from '~collections';

/**
 * INTERFACE
 */
export type Collection
  = | typeof NOTE_COLLECTION_NAME
    | typeof CATEGORY_COLLECTION_NAME;

/**
 * [STORAGE] Storage
 * @description Define a storage instance.
 * @example
 * <caption>Example usage of **Storage** method.</caption>
 *
 * ````typescript jsx
 * class MyDatabase implements Storage {
 *  ...
 * }
 * ```
 *
 */
export interface Storage {
  /**
   * [STORAGE] init
   * @description Initializate the storage.
   * @example
   * <caption>Example usage of **init** method.</caption>
   *
   * ````typescript jsx
   * init();
   * ```
   *
   */
  init(): void;
  init(): Promise<void>;
  /**
   * [STORAGE] create
   * @description Create an element inside a given collection.
   * @example
   * <caption>Example usage of **create** method.</caption>
   *
   * ````typescript jsx
   * const created = create('collection', { ... });
   *
   * if (created.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  create<Document extends BaseDocumentAttributesWithId>(collection: Collection, document: Omit<Document, keyof BaseDocumentAttributesWithId>): Promise<ThrowLess<Error, Document>>;
  /**
   * [STORAGE] one
   * @description Retrieve an element inside a given collection.
   * @example
   * <caption>Example usage of **one** method.</caption>
   *
   * ````typescript jsx
   * const document = one('collection', 'apx-CfY7_ZPeRSMJ8ZM0rTd3A');
   *
   * if (document.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  one<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, Document>>;
  /**
   * [STORAGE] all
   * @description Retrieve all elements inside a given collection.
   * @example
   * <caption>Example usage of **all** method.</caption>
   *
   * ````typescript jsx
   * const documents = one('collection');
   *
   * if (documents.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  all<Document extends BaseDocumentAttributesWithId>(collection: Collection): Promise<ThrowLess<Error, Array<Document>>>;
  /**
   * [STORAGE] update
   * @description Update a single elements from a given collection.
   * @example
   * <caption>Example usage of **update** method.</caption>
   *
   * ````typescript jsx
   * const updated = update('collection', 'apx-CfY7_ZPeRSMJ8ZM0rTd3A', { ... });
   *
   * if (updated.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  update<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId, patch: Partial<Document>): Promise<ThrowLess<Error, Document>>;
  /**
   * [STORAGE] archive
   * @description Archive a single elements from a given collection.
   * @example
   * <caption>Example usage of **archive** method.</caption>
   *
   * ````typescript jsx
   * const archived = archive('collection', 'apx-CfY7_ZPeRSMJ8ZM0rTd3A');
   *
   * if (archived.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  archive<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, Document>>;
  /**
   * [STORAGE] unarchive
   * @description Unarchive a single elements from a given collection. The document must be archived before being able to unarchived.
   * @example
   * <caption>Example usage of **unarchive** method.</caption>
   *
   * ````typescript jsx
   * const unarhcived = unarchive('collection', 'apx-CfY7_ZPeRSMJ8ZM0rTd3A');
   *
   * if (unarhcived.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  unarchive<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, Document>>;
  /**
   * [STORAGE] remove
   * @description Remove a single elements from a given collection. The document must be unarchived before being able to remove.
   * @example
   * <caption>Example usage of **remove** method.</caption>
   *
   * ````typescript jsx
   * const removed = remove('collection', 'apx-CfY7_ZPeRSMJ8ZM0rTd3A');
   *
   * if (removed.isSuccess()) {
   *  // do something on success
   * }
   * ```
   *
   */
  remove<Document extends BaseDocumentAttributesWithId>(collection: Collection, documentId: DocumentId): Promise<ThrowLess<Error, true>>;
}
